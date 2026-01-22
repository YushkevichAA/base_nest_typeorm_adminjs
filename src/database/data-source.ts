import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from './../user/entities/user.entity';
config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: 'admin',
  password: 'qwerty',
  database: 'typeorm_test',
  entities: [User],
  synchronize: true,
  logging: true,
});
