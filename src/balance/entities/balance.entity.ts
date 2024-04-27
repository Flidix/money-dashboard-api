import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '@shared/database/entities/base.entity';
import { MoneyEntity } from 'src/money/entities/money.entity';
import { UserEntity } from 'src/user/entities/user.entity';

import { databaseTables } from '@shared/database/constants';

@Entity({ name: databaseTables.balances })
export class BalanceEntity extends BaseEntity {
  @Column()
  balance: number;

  @Column()
  title: string;

  @Column()
  userId: number;

  @ManyToOne(() => UserEntity, (user) => user.balance)
  user?: UserEntity;

  @OneToMany(() => MoneyEntity, (money) => money.balance)
  money: MoneyEntity[];
}
