import { DatabaseEntitiesType } from '../types';

export const databaseTables: Record<keyof DatabaseEntitiesType, string> = <const>{
  users: 'users',
  balances: 'balances',
  money: 'money',
  categories: 'categories',
};
