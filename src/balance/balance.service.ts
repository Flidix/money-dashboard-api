import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@shared/database/services/database.service';

import { CreateBalanceDto } from './dtos/create-balance.dto';

@Injectable()
export class BalanceService extends DatabaseService {
  async createBalance(userId: number, dto: CreateBalanceDto) {
    const user = await this.database.users.findOneOrFail({ where: { id: userId } });
    const balance = await this.database.balances.create({
      ...dto,
      userId,
      user,
    });

    return balance;
  }

  async getUserBalances(userId: number) {
    const balances = await this.database.balances.findAll({ where: { userId } });
    return balances;
  }
}
