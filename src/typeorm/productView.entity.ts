import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    name: "product_view",
    expression: `
        SELECT 
            p.id, 
            m.name as model_name, 
            m.brand_id as brand_id,
            b.name as brand_name, 
            col.name as color_name, 
            cat.name as category_name, 
            m.category_id as category_id,
            p.price, 
            (p.quantity = 0) AS out_of_stock
        FROM product p 
        LEFT JOIN model m ON m.id = p.model_id
        LEFT JOIN color col ON col.id = p.color_id
        LEFT JOIN brand b ON b.id = m.brand_id
        LEFT JOIN category cat ON cat.id = m.category_id
        ORDER BY out_of_stock ASC
    `,
})
export class ProductView {
    @ViewColumn()
    id: number;

    @ViewColumn({ name: "model_name" })
    modelName: string;

    @ViewColumn({ name: "brand_name" })
    brandName: string;

    @ViewColumn({ name: "brand_id" })
    brandId: number;

    @ViewColumn({ name: "color_name" })
    colorName: string;

    @ViewColumn({ name: "category_id" })
    categoryId: number;

    @ViewColumn({ name: "category_name" })
    categoryName: string;

    @ViewColumn({ name: "price" })
    price: number;

    @ViewColumn({ name: "out_of_stock" })
    outOfStock: boolean;
}
