import { IsInt, IsOptional, IsString } from "class-validator";

export class SearchDto {
    @IsOptional()
    @IsInt()
    categoryId: number;

    @IsOptional()
    @IsInt()
    brandId: number;

    @IsOptional()
    @IsString()
    colorName: string;

    @IsOptional()
    @IsString()
    modelName: string;
}
