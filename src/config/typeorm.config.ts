import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '192.168.0.110',
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: 'taskmanagement',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
