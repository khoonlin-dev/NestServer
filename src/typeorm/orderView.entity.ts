import { ViewEntity, ViewColumn } from "typeorm";
import { OrderStatus } from "./order.entity";

@ViewEntity({
    name: "order_view",
    expression: `
        SELECT 
            o.id, 
            o.product_id, 
            m.name as model_name, 
            c.name as color_name, 
            o.status, 
            o.date_added
        FROM p_order o
            LEFT JOIN product p ON p.id = o.product_id
            LEFT JOIN model m ON m.id = p.model_id
            LEFT JOIN color c ON c.id = p.color_id
        ORDER BY o.date_added DESC;
    `,
})
export class OrderView {
    @ViewColumn()
    id: number;

    @ViewColumn({ name: "product_id" })
    productId: number;

    @ViewColumn({ name: "model_name" })
    modelName: string;

    @ViewColumn({ name: "color_name" })
    colorName: string;

    @ViewColumn({ name: "date_added" })
    dateAdded: Date;

    @ViewColumn({ name: "status" })
    status: OrderStatus;
}
