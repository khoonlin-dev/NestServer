import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class SearchDto {
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    categoryId: number;

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    brandId: number;

    @IsOptional()
    @IsString()
    colorName: string;

    @IsOptional()
    @IsString()
    modelName: string;
}
