import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Model } from "./model.entity";

@Entity({ name: "brand" })
@Index(["name", "country"], { unique: true })
export class Brand {
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

    @Column({
        name: "country",
        nullable: false,
        type: "varchar",
    })
    country: string;

    @OneToMany(() => Model, (model) => model.brand) models: Model[];
}
