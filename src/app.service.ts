import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OlxAdPost } from './schemas/olx-post.schema';
import { Model } from 'mongoose';
import { GetolxPostsDto } from './models/get-olx-posts.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(OlxAdPost.name) private olxAdPost: Model<OlxAdPost>,
  ) {}

  async getOlxPosts(query: GetolxPostsDto): Promise<OlxAdPost[]> {
    let filter = {};
    const { q, offset, limit } = query;

    if (q) {
      filter = {
        $or: [
          { title: { $regex: `.*${q}.*` } },
          { seller: { $regex: `.*${q}.*` } },
          { location: { $regex: `.*${q}.*` } },
        ],
      };
    }

    return this.olxAdPost.find(filter).skip(offset).limit(limit);
  }

  async getOlxPostsCount(query: GetolxPostsDto): Promise<number> {
    let filter = {};
    const { q } = query;

    if (q) {
      filter = {
        $or: [
          { title: { $regex: `.*${q}.*` } },
          { seller: { $regex: `.*${q}.*` } },
          { location: { $regex: `.*${q}.*` } },
        ],
      };
    }

    return this.olxAdPost.countDocuments(filter);
  }
}
