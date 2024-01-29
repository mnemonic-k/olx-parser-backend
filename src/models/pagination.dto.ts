import { Type } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';

const LIMIT_MIN = 0;
const LIMIT_MAX = 100;
const MIN_OFFSET = 0;

export class PaginationDto {
  @Type(() => Number)
  @IsOptional()
  @Min(LIMIT_MIN)
  @Max(LIMIT_MAX)
  readonly limit: number = 10;

  @Type(() => Number)
  @IsOptional()
  @Min(MIN_OFFSET)
  readonly offset: number = 0;
}
