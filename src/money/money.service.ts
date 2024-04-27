import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@shared/database/services/database.service';

import { CreateMoneyDto } from './dto/money.dto';

@Injectable()
export class MoneyService extends DatabaseService {
    async createMoney(body: CreateMoneyDto) {
        const category = await this.database.categories.findOneOrFail({
            where: { id: body.categoryId },
        });

        const balance = await this.database.balances.findOneOrFail({ where: { id: body.balanceId } });

        const money = await this.database.money.create({
            ...body,
            category,
            balance,
        });

        return money;
    }
}
