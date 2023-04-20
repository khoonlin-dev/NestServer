import {
    Body,
    Controller,
    Get,
    Post,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { OrderService } from "../services/order.service";
import { CreateOrderDto, UpdateOrderDto } from "../dto/order.dto";
import { OrderStatus } from "src/typeorm/order.entity";

@Controller("order")
export class OrderController {
    constructor(private readonly orderService: OrderService) {}
    @Get("get")
    getOrders() {
        return this.orderService.getOrders();
    }

    @Post("create")
    @UsePipes(ValidationPipe)
    createOrder(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.createOrder(createOrderDto);
    }

    @Post("complete")
    @UsePipes(ValidationPipe)
    completeOrder(@Body() updateOrderDto: UpdateOrderDto) {
        return this.orderService.updateOrder({
            orderId: updateOrderDto.orderId,
            status: OrderStatus.COMPLETED,
        });
    }
}
