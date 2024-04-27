import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '@shared/database/entities/base.entity';
import { BalanceEntity } from 'src/balance/entities/balance.entity';

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

  @ManyToOne(() => BalanceEntity, (user) => user.balance)
  balance?: BalanceEntity;
}
