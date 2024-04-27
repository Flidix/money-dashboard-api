import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '@shared/database/entities/base.entity';
import { MoneyEntity } from 'src/money/entities/money.entity';

import { databaseTables } from '@shared/database/constants';

@Entity({ name: databaseTables.categories })
export class CategoryEntity extends BaseEntity {
  @Column()
  title: string;

  @OneToMany(() => MoneyEntity, (money) => money.category)
  money: MoneyEntity[];
}
