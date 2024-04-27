import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '@shared/database/database.module';
import { BalanceModule } from './balance/balance.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, BalanceModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
