import {
  Model, DECIMAL, INTEGER, STRING,
} from 'sequelize';
import db from '.';

class Stocks extends Model {
  id!: number;

  ticker!: string;

  actualPrice!: number;
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
