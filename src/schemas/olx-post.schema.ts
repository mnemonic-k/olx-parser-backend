import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OlxAdPostDocument = HydratedDocument<OlxAdPost>;

@Schema()
export class OlxAdPost {
  @Prop()
  uuid: number;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  price: string;

  @Prop()
  seller: string;

  @Prop()
  postedAt: string;

  @Prop()
  contactPhone: string;

  @Prop()
  location: string;
}

export const OlxAdPostSchema = SchemaFactory.createForClass(OlxAdPost);
