import 'dotenv/config';
import { Options } from 'sequelize';

console.log(process.env.DB_NAME);
const config: Options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'mysql',
};

export = config;
