import { Controller, Post } from '@nestjs/common';

import { MoneyService } from './money.service';

import { CreateMoneyDto } from './dto/money.dto';

@Controller('money')
export class MoneyController {
  constructor(private readonly moneyService: MoneyService) { }

  @Post()
  createMoney(body: CreateMoneyDto) {
    return this.moneyService.createMoney(body);
  }
}
