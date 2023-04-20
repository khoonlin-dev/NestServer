import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Brand, Category, Color } from "src/typeorm";
import { Repository } from "typeorm";

type NumberMap = Record<number, string>;

type SearchOption = {
    color: NumberMap[];
    brand: NumberMap[];
    category: NumberMap[];
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
    getSearchOption(type: string): Promise<NumberMap[]>;
    getSearchOption(type?: string): Promise<SearchOption | NumberMap[]> {
        switch (type) {
            case "brand": {
                return this.brandRepository.find().then((brandArr) => {
                    return brandArr.map(({ id, name }) => {
                        return { [id]: name };
                    });
                });
            }
            case "category": {
                return this.categoryRepository.find().then((catArr) => {
                    return catArr.map(({ id, name }) => {
                        return { [id]: name };
                    });
                });
            }
            case "color": {
                return this.colorRepository.find().then((colArr) => {
                    return colArr.map(({ id, name }) => {
                        return { [id]: name };
                    });
                });
            }
            default: {
                return Promise.all([
                    this.colorRepository.find(),
                    this.brandRepository.find(),
                    this.categoryRepository.find(),
                ]).then(([color, brand, category]) => {
                    return {
                        color: color.map(({ id, name }) => {
                            return { [id]: name };
                        }),
                        brand: brand.map(({ id, name }) => {
                            return { [id]: name };
                        }),
                        category: category.map(({ id, name }) => {
                            return { [id]: name };
                        }),
                    };
                });
            }
        }
    }
}
