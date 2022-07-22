import { Model, INTEGER } from 'sequelize';
import db from '.';
import Brokers from './brokers';
import Stocks from './stocks';

class BrokersQtyStocks extends Model {
  id!: number;

  brokerId!: number;

  stockId!: number;

  availableQty!: number;
}

BrokersQtyStocks.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  brokerId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'brokers',
      key: 'id',
    },
  },
  stockId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'stocks',
      key: 'id',
    },
  },
  availableQty: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  // underscored: true,
  sequelize: db,
  modelName: 'available_stocks_by_brokers',
  timestamps: false,
});

Brokers.belongsToMany(Stocks, {
  through: BrokersQtyStocks, foreignKey: 'brokerId', as: 'stocks', otherKey: 'stockId',
});

Stocks.belongsToMany(Brokers, {
  through: BrokersQtyStocks, foreignKey: 'stockId', as: 'brokers', otherKey: 'brokerId',
});

export default BrokersQtyStocks;
