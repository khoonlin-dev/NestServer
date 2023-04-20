import { Brand } from "./brand.entity";
import { Category } from "./category.entity";
import { Color } from "./color.entity";
import { Model } from "./model.entity";
import { Order } from "./order.entity";
import { OrderView } from "./orderView.entity";
import { Product } from "./product.entity";
import { ProductView } from "./productView.entity";

const entities = [
    Color,
    Brand,
    Model,
    Category,
    Product,
    ProductView,
    Order,
    OrderView,
];

export {
    Color,
    Brand,
    Model,
    Category,
    Product,
    ProductView,
    Order,
    OrderView,
};
export default entities;
