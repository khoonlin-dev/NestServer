import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product.entity";

export enum OrderStatus {
    OPENED = "opened",
    CANCELLED = "cancelled",
    COMPLETED = "completed",
}

@Entity({ name: "p_order" })
export class Order {
    @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
    })
    id: number;

    @ManyToOne(() => Product, (product) => product.orders, {
        nullable: false,
    })
    @JoinColumn({ name: "product_id" })
    product: Product;

    @Column({
        name: "date_added",
        nullable: false,
        default: () => "NOW()",
        type: "timestamptz",
    })
    dateAdded: Date;

    @Column({
        name: "status",
        type: "enum",
        enum: OrderStatus,
        default: OrderStatus.OPENED,
        nullable: false,
    })
    status: OrderStatus;
}
