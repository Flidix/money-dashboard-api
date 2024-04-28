import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@shared/database/services/database.service';

@Injectable()
export class CategoryService extends DatabaseService {
  async createCategory(title: string) {
    const category = await this.database.categories.create({ title });
    return category;
  }

  async createUserCategories(userId: number, title: string) {
    const user = await this.database.users.findOneOrFail({ where: { id: userId } });

    const category = await this.database.categories.create({ title, user, userId });

    return category;
  }

  async getUserCategories(userId: number) {
    const categories = await this.database.categories
      .createQueryBuilder('category')
      .where('category.userId = :userId OR category.userId IS NULL', { userId })
      .orderBy('category.userId', 'DESC')
      .getMany();

    return categories;
  }
}
