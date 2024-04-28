import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '@shared/database/entities/base.entity';
import { BalanceEntity } from 'src/balance/entities/balance.entity';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { UserEntity } from 'src/user/entities/user.entity';

import { databaseTables } from '@shared/database/constants';

@Entity({ name: databaseTables.money })
export class MoneyEntity extends BaseEntity {
  @Column()
  amount: number;

  @Column()
  isPositive: boolean;

  @Column()
  description: string;

  @Column()
  balanceId: number;

  @Column()
  userId?: number;

  @ManyToOne(() => UserEntity)
  user?: UserEntity;

  @ManyToOne(() => BalanceEntity, (user) => user.balance)
  balance?: BalanceEntity;

  @ManyToOne(() => CategoryEntity, (category) => category.money)
  category?: CategoryEntity;
}
