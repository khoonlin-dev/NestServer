import {
    Body,
    Controller,
    Get,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { OrderService } from "../services/order.service";
import { CreateOrderDto, UpdateOrderDto } from "../dto/order.dto";
import { OrderStatus } from "src/typeorm/order.entity";

// Todo: improvement
// 1. improve order-create api using two phase commit (post to create row in order table and put to update quantity column in product table), looks more restful
// 2. validate each transaction using session token in future. Please think of a service to generate and store session token...

@Controller("order")
export class OrderController {
    constructor(private readonly orderService: OrderService) {}
    @Get("get")
    getOrders() {
        // TODO: Should I ask for client timezone from request header and convert order date to local time here?
        return this.orderService.getOrders();
    }

    @Post("create")
    @UsePipes(ValidationPipe)
    createOrder(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.createOrder(createOrderDto);
    }

    @Put("complete")
    @UsePipes(ValidationPipe)
    completeOrder(@Body() updateOrderDto: UpdateOrderDto) {
        return this.orderService.updateOrder({
            orderId: updateOrderDto.orderId,
            status: OrderStatus.COMPLETED,
        });
    }
}
