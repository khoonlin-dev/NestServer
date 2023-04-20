import {
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
} from "class-validator";
import { OrderStatus } from "src/typeorm/order.entity";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsInt()
    productId: number;
}

export class UpdateOrderDto {
    @IsNotEmpty()
    @IsInt()
    orderId: number;

    @IsNotEmpty()
    @IsInt()
    @IsEnum(OrderStatus)
    status: OrderStatus;
}
