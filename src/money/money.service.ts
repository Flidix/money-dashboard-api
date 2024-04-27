import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@shared/database/services/database.service';

import { CreateMoneyDto } from './dto/money.dto';

@Injectable()
export class MoneyService extends DatabaseService {
    createMoney(body: CreateMoneyDto) {
        return;
    }
}
