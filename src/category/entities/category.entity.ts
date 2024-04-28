import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '@shared/database/entities/base.entity';
import { MoneyEntity } from 'src/money/entities/money.entity';
import { UserEntity } from 'src/user/entities/user.entity';

import { databaseTables } from '@shared/database/constants';

@Entity({ name: databaseTables.categories })
export class CategoryEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  userId?: number;

  @ManyToOne(() => UserEntity)
  user?: UserEntity;

  @OneToMany(() => MoneyEntity, (money) => money.category)
  money: MoneyEntity[];
}
