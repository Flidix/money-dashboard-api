import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@shared/database/services/database.service';

@Injectable()
export class CategoryService extends DatabaseService {
  async createCategory(title: string) {
    const category = await this.database.categories.create({ title });
    return category;
  }
}
