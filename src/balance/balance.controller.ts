import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { BalanceService } from './balance.service';

import { JwtAuthGuard } from 'src/auth/guards/auth.guard';

import { CurrentUser } from 'src/auth/decorators/currentUser';

import { CreateBalanceDto } from './dtos/create-balance.dto';

@UseGuards(JwtAuthGuard)
@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Post('create')
  createBalance(@CurrentUser('userId') userId: number, @Body() dto: CreateBalanceDto) {
    return this.balanceService.createBalance(userId, dto);
  }
}
