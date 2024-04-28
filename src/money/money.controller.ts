import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { MoneyService } from './money.service';

import { JwtAuthGuard } from 'src/auth/guards/auth.guard';

import { CurrentUser } from 'src/auth/decorators/currentUser';

import { CreateMoneyDto } from './dto/money.dto';

@UseGuards(JwtAuthGuard)
@Controller('money')
export class MoneyController {
  constructor(private readonly moneyService: MoneyService) {}

  @Post()
  createMoney(@Body() body: CreateMoneyDto, @CurrentUser('userId') userId: number) {
    return this.moneyService.createMoney(body, userId);
  }
}
