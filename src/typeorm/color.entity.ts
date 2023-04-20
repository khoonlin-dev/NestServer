import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity({ name: "color" })
export class Color {
    @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
    })
    id: number;

    @Column({
        name: "name",
        nullable: false,
        type: "varchar",
        unique: true,
    })
    name: string;

    @OneToMany(() => Product, (product) => product.color) products: Product[];
}
