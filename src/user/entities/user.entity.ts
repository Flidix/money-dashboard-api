import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '@shared/database/entities/base.entity';
import { BalanceEntity } from 'src/balance/entities/balance.entity';

import { databaseTables } from '@shared/database/constants';

@Entity({ name: databaseTables.users })
export class UserEntity extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => BalanceEntity, (balance) => balance.user)
  balance?: BalanceEntity[];
}
