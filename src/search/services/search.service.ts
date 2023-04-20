import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductView } from "src/typeorm";
import { Repository } from "typeorm";

type SearchParam = Partial<{
    modelName: string;
    categoryId: number;
    /**
     * For example, even though user select color id:1 "Gold",
     * but we want to return "Rose Gold" (id:15) as part of result as well
     */
    colorName: string;
    brandId: number;
}>;

@Injectable()
export class SearchService {
    constructor(
        @InjectRepository(ProductView)
        private readonly productViewRepository: Repository<ProductView>
    ) {}

    search(param: SearchParam) {
        const findOption = {};
        if (param.brandId) findOption["brandId"] = param.brandId;
        if (param.categoryId) findOption["categoryId"] = param.categoryId;
        return this.productViewRepository
            .find({ where: findOption })
            .then((result) => {
                // TODO any suggestion on how to imitate SQL left-hand-side processing before matching?
                return result.filter((val) => {
                    if (param.modelName !== undefined) {
                        if (
                            !val.modelName
                                .toLowerCase()
                                .replace(" ", "")
                                .includes(
                                    param.modelName
                                        .toLowerCase()
                                        .replace(" ", "")
                                )
                        ) {
                            return false;
                        }
                    }
                    if (param.colorName !== undefined) {
                        if (
                            !val.colorName
                                .toLowerCase()
                                .replace(" ", "")
                                .includes(
                                    param.colorName
                                        .toLowerCase()
                                        .replace(" ", "")
                                )
                        ) {
                            return false;
                        }
                    }
                    return true;
                });
            });
    }
}
