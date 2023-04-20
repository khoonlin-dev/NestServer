import { IsInt, IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsInt()
    productId: number;
}

export class UpdateOrderDto {
    @IsNotEmpty()
    @IsInt()
    orderId: number;
}
