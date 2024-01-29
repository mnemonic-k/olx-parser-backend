import { Transform, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { PaginationDto } from './pagination.dto';

export class GetolxPostsDto extends PaginationDto {
  @Type(() => String)
  @Transform(({ value }) => value?.trim())
  @IsOptional()
  readonly q: string;
}
