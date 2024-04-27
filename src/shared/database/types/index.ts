import { UserEntity } from '../../../user/entities/user.entity';
import { BalanceEntity } from 'src/balance/entities/balance.entity';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { MoneyEntity } from 'src/money/entities/money.entity';

import { DatabaseRepository } from '../repositories/database.repository';

export type DatabaseEntitiesType = {
  users: UserEntity;
  balances: BalanceEntity;
  money: MoneyEntity;
  categories: CategoryEntity;
};

export type DatabaseRepositories = {
  [table in keyof DatabaseEntitiesType]: DatabaseRepository<DatabaseEntitiesType[table]>;
};
