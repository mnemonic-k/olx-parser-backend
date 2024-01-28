import { OlxAdPost } from 'src/schemas/olx-post.schema';
import { OlxPostDto } from './olx-post.dto';
import { PaginationResponseDto } from './pagination.res.dto';

export class OlxPostsDto {
  constructor(posts: OlxAdPost[] = [], pagination?: PaginationResponseDto) {
    this.data = posts.map((item) => new OlxPostDto(item));

    this.pagination = pagination;
  }

  data: OlxPostDto[];

  pagination: PaginationResponseDto;
}
