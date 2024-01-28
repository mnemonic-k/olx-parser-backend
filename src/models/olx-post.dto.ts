import { OlxAdPost } from 'src/schemas/olx-post.schema';

export class OlxPostDto {
  constructor(data: OlxAdPost) {
    this.uuid = data.uuid;
    this.title = data.title;
    this.description = data.description;
    this.price = data.price;
    this.seller = data.seller;
    this.postedAt = data.postedAt;
    this.contactPhone = data.contactPhone;
    this.location = data.location;
  }

  uuid: number;
  title: string;
  description: string;
  price: string;
  seller: string;
  postedAt: string;
  contactPhone: string;
  location: string;
}
