export class PaginationResponseDto {
  constructor(count: number, query: { offset: number; limit: number }) {
    this.nextOffset = query.offset + query.limit;
    this.nextPage = Math.floor((query.offset + query.limit) / query.limit + 1);
    this.totalCount = count;
  }

  readonly nextOffset: number;

  readonly nextPage: number;

  readonly totalCount: number;
}
