import { UserEntity } from '../../../user/entities/user.entity';
import { BalanceEntity } from 'src/balance/entities/balance.entity';

import { DatabaseRepository } from '../repositories/database.repository';

export type DatabaseEntitiesType = {
  users: UserEntity;
  balances: BalanceEntity;
};

export type DatabaseRepositories = {
  [table in keyof DatabaseEntitiesType]: DatabaseRepository<DatabaseEntitiesType[table]>;
};
