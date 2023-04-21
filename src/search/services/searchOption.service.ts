import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Brand, Category, Color } from "src/typeorm";
import { Repository } from "typeorm";

type NumberMap = Record<number, string>;

type SearchOption = {
    brand: Record<string, string>;
    color: Record<string, string>;
    category: Record<string, string>;
};

@Injectable()
export class SearchOptionService {
    constructor(
        @InjectRepository(Brand)
        private readonly brandRepository: Repository<Brand>,
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
        @InjectRepository(Color)
        private readonly colorRepository: Repository<Color>
    ) {}

    getSearchOption(): Promise<SearchOption>;
    getSearchOption(type: string): Promise<Partial<SearchOption>>;
    getSearchOption(type?: string): Promise<Partial<SearchOption>> {
        switch (type) {
            case "brand": {
                return this.brandRepository.find().then((brandArr) => {
                    const brandMap = {};
                    brandArr.map(({ id, name }) => {
                        brandMap[id] = name;
                    });
                    return { [type]: brandMap };
                });
            }
            case "category": {
                return this.categoryRepository.find().then((catArr) => {
                    const catMap = {};
                    catArr.map(({ id, name }) => {
                        catMap[id] = name;
                    });
                    return { [type]: catMap };
                });
            }
            case "color": {
                return this.colorRepository.find().then((colArr) => {
                    const colorMap = {};
                    colArr.map(({ id, name }) => {
                        colorMap[id] = name;
                    });
                    return { [type]: colorMap };
                });
            }
            default: {
                return Promise.all([
                    this.colorRepository.find(),
                    this.brandRepository.find(),
                    this.categoryRepository.find(),
                ]).then(([color, brand, category]) => {
                    const colorMap = {};
                    color.map(({ id, name }) => {
                        colorMap[id] = name;
                    });
                    const catMap = {};
                    category.map(({ id, name }) => {
                        catMap[id] = name;
                    });
                    const brandMap = {};
                    brand.map(({ id, name }) => {
                        brandMap[id] = name;
                    });
                    return {
                        color: colorMap,
                        brand: brandMap,
                        category: catMap,
                    };
                });
            }
        }
    }
}
