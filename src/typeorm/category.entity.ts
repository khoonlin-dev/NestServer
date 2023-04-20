import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Model } from "./model.entity";

@Entity({ name: "category" })
export class Category {
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

    @OneToMany(() => Model, (model) => model.category) models: Model[];
}
