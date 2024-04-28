import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@shared/database/services/database.service';

import { CreateMoneyDto } from './dto/money.dto';

@Injectable()
export class MoneyService extends DatabaseService {
  async createMoney(body: CreateMoneyDto, userId: number) {
    const category = await this.database.categories.findOneOrFail({
      where: { id: body.categoryId },
    });
    const user = await this.database.users.findOneOrFail({ where: { id: userId } });
    const balance = await this.database.balances.findOneOrFail({ where: { id: body.balanceId } });
    const money = await this.database.money.create({
      ...body,
      category,
      balance,
      user,
      userId,
    });
    return money;
  }

  //   async getBalanceMoney(balanceId: number, userId: number) {
  //     const money = await this.database.money.findAll({ where: { balanceId, userId } });
  //   }
}
