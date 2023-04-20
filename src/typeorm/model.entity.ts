import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Brand } from "./brand.entity";
import { Category } from "./category.entity";
import { Product } from "./product.entity";

@Entity({ name: "model" })
@Index(["brand", "name"], { unique: true })
export class Model {
    @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
    })
    id: number;

    @Column({
        name: "name",
        nullable: false,
        type: "varchar",
    })
    name: string;

    @ManyToOne(() => Category, (category) => category.models, {
        nullable: false,
    })
    @JoinColumn({ name: "category_id" })
    category: Brand;

    @ManyToOne(() => Brand, (brand) => brand.models, {
        nullable: false,
    })
    @JoinColumn({ name: "brand_id" })
    brand: Brand;

    @OneToMany(() => Product, (product) => product.color) products: Product[];
}
