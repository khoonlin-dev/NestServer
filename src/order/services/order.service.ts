import {
    ConflictException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order, OrderView, Product } from "src/typeorm";
import { OrderStatus } from "src/typeorm/order.entity";
import { Repository } from "typeorm";

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
                        throw new NotFoundException({
                            errorId: param.productId,
                            reason: `Product cannot be found`,
                        });
                    }
                    if (result.quantity <= 0) {
                        throw new ConflictException({
                            outOfStock: true,
                            reason: `Product is currently out of stock`,
                        });
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
                .then(([Product]) => {
                    return {
                        outOfStock: Product.quantity === 0,
                    };
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
                        throw new NotFoundException({
                            errorId: param.orderId,
                            reason: `Order cannot be found`,
                        });
                    }
                    if (result.status !== OrderStatus.OPENED) {
                        throw new ConflictException({
                            status: result.status,
                            reason: `Order is already ${result.status}`,
                        });
                    }
                    result.status = param.status;
                    return this.orderRepository.save(result);
                })
                .then((order) => {
                    return {
                        status: order.status,
                    };
                })
        );
    }
}
