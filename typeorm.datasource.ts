import { join } from 'path';
import { DataSource } from 'typeorm';

import { Environment } from '@shared/variables/environment';

const isDist = __dirname.endsWith('dist');

const filesExtension = isDist ? '.js' : '.ts';

const dataSource = new DataSource({
  type: 'postgres',
  url: Environment.DATABASE_URL,

  migrationsRun: true,

  entities: [join(__dirname, '/**/entities/*.entity' + filesExtension)],
  migrations: [
    join(__dirname, '/**/migrations/*' + filesExtension),
    join(__dirname, '/**/seeds/*' + filesExtension),
  ],
  subscribers: [join(__dirname, '/**/subscribers/*' + filesExtension)],
});

export default dataSource;
