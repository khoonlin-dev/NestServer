import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrderService } from "../services/order.service";
import { CreateOrderDto } from "../dto/order.dto";
import { OrderStatus } from "src/typeorm/order.entity";

@Controller("order")
export class OrderController {
    constructor(private readonly orderService: OrderService) {}
    @Get("get")
    getOrders() {
        return this.orderService.getOrders();
    }

    @Post("create")
    createOrder(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.createOrder(createOrderDto);
    }

    @Post("complete")
    completeOrder(@Body() info: { orderId: number }) {
        return this.orderService.updateOrder({
            orderId: info.orderId,
            status: OrderStatus.COMPLETED,
        });
    }
}
