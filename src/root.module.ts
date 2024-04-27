import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '@shared/database/database.module';
import { BalanceModule } from './balance/balance.module';
import { MoneyModule } from './money/money.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, BalanceModule, MoneyModule, CategoryModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
