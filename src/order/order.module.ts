import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order, OrderView, Product } from "src/typeorm";
import { OrderController } from "./controllers/order.controller";
import { OrderService } from "./services/order.service";

@Module({
    controllers: [OrderController],
    providers: [OrderService],
    imports: [TypeOrmModule.forFeature([Product, Order, OrderView])],
})
export class OrderModule {}
