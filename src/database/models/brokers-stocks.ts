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
      model: 'broker',
      key: 'id',
    },
  },
  stockId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'stock',
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
  modelName: 'brokers_available_qty_stocks',
  timestamps: false,
});

BrokersQtyStocks.belongsTo(Brokers, { foreignKey: 'brokerId', as: 'Broker' });
Brokers.hasMany(BrokersQtyStocks, { foreignKey: 'brokerId', as: 'Broker' });

BrokersQtyStocks.belongsTo(Stocks, { foreignKey: 'stockId', as: 'stock' });
Stocks.hasMany(BrokersQtyStocks, { foreignKey: 'stockId', as: 'stock' });

export default BrokersQtyStocks;
