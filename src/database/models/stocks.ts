import {
  Model, DECIMAL, INTEGER, STRING,
} from 'sequelize';
import db from '.';
import { IBroker } from '../../investments/interfaces/IAssets';

class Stocks extends Model {
  id!: number;

  ticker!: string;

  actualPrice!: number;

  brokers!: IBroker[];
}

Stocks.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  ticker: {
    type: STRING(10),
    allowNull: false,
  },
  actualPrice: {
    type: DECIMAL(6, 2),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'stocks',
  timestamps: false,
});

export default Stocks;
