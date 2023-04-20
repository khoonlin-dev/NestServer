import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Brand, Category, Color, Product, ProductView } from "src/typeorm";
import { SearchController } from "./controllers/search/search.controller";
import { SearchOptionService } from "./services/searchOption.service";
import { SearchService } from "./services/search.service";
// import { BrandController } from "./controllers/brand/brand.controller";
// import { BrandService } from "./services/brand/brand.service";

@Module({
    controllers: [SearchController],
    providers: [SearchOptionService, SearchService],
    imports: [
        TypeOrmModule.forFeature([
            Color,
            Category,
            Brand,
            Product,
            ProductView,
        ]),
    ],
})
export class SearchModule {}
