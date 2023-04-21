import { Injectable, UsePipes, ValidationPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order, OrderView, Product } from "src/typeorm";
import { OrderStatus } from "src/typeorm/order.entity";
import { Repository } from "typeorm";
import { UpdateOrderDto } from "../dto/order.dto";

type PlaceOrderInfo = {
    productId: number;
};

type UpdateOrder = { orderId: number; status: OrderStatus };

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(OrderView)
        private readonly orderViewRepository: Repository<OrderView>
    ) {}

    getOrders() {
        return this.orderViewRepository.find();
    }

    createOrder(param: PlaceOrderInfo) {
        // Validate product id
        return (
            this.productRepository
                // Can use findOne since we are finding by identity column
                .findOne({
                    where: {
                        id: param.productId,
                    },
                })
                .then((result) => {
                    if (!result) {
                        return Promise.reject("Product cannot be found by id");
                    }
                    if (result.quantity <= 0) {
                        return Promise.reject("Project is out of stock");
                    }
                    result.quantity -= 1;
                    const newOrder = this.orderRepository.create({
                        product: result,
                    });
                    return Promise.all([
                        this.productRepository.save(result),
                        this.orderRepository.save(newOrder),
                    ]);
                })
                .then(() => {
                    return;
                })
        );
    }

    updateOrder(param: UpdateOrder) {
        // Validate product id
        return (
            this.orderRepository
                // Can use findOne since we are finding by identity column
                .findOne({
                    where: {
                        id: param.orderId,
                    },
                })
                .then((result) => {
                    if (!result) {
                        return Promise.reject("Order cannot be found by id");
                    }
                    if (result.status !== OrderStatus.OPENED) {
                        return Promise.reject(
                            `Order is already ${result.status}`
                        );
                    }
                    result.status = param.status;
                    return this.orderRepository.save(result);
                })
                .then(() => {
                    return;
                })
        );
    }
}
