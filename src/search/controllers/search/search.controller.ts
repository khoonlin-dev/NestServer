import {
    Controller,
    Get,
    Query,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { SearchDto } from "src/search/dto/search.dto";
import { SearchService } from "src/search/services/search.service";
import { SearchOptionService } from "src/search/services/searchOption.service";

@Controller("search")
export class SearchController {
    constructor(
        private readonly searchService: SearchService,
        private readonly searchOptionService: SearchOptionService
    ) {}

    @Get("get-option")
    getSearchOption() {
        return this.searchOptionService.getSearchOption();
    }

    @Get("get")
    @UsePipes(ValidationPipe)
    search(@Query() searchDto: SearchDto) {
        return this.searchService.search(searchDto);
    }
}
