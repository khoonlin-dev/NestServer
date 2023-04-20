import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Model } from "./model.entity";
import { Color } from "./color.entity";
import { IsPositive } from "class-validator";
import { Order } from "./order.entity";

@Entity({ name: "product" })
export class Product {
    @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
    })
    id: number;

    @ManyToOne(() => Model, (model) => model.products, {
        nullable: false,
    })
    @JoinColumn({ name: "model_id" })
    model: Model;

    @ManyToOne(() => Color, (color) => color.products, {
        nullable: false,
    })
    @JoinColumn({ name: "color_id" })
    color: Color;

    @Column({
        name: "price",
        nullable: false,
        type: "numeric",
        precision: 12,
        scale: 2,
    })
    @IsPositive()
    price: number;

    @Column({
        name: "quantity",
        nullable: false,
        type: "int",
    })
    @IsPositive()
    quantity: number;

    @OneToMany(() => Order, (order) => order.product) orders: Order[];
}
