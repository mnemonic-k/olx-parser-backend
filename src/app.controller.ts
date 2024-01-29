import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { OlxPostsDto } from './models/olx-posts.dto';
import { GetolxPostsDto } from './models/get-olx-posts.dto';
import { PaginationResponseDto } from './models/pagination.res.dto';

@Controller('/olx-parser')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('posts')
  async getOlxPosts(@Query() query: GetolxPostsDto): Promise<OlxPostsDto> {
    let count = 0,
      list = [];

    count = await this.appService.getOlxPostsCount(query);

    if (count) {
      list = await this.appService.getOlxPosts(query);
    }

    return new OlxPostsDto(list, new PaginationResponseDto(count, query));
  }
}
