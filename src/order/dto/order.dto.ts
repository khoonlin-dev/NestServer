import { Type } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    productId: number;
}

export class UpdateOrderDto {
    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    orderId: number;
}
