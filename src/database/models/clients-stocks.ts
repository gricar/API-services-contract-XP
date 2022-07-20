import { Model, INTEGER } from 'sequelize';
import db from '.';
import Brokers from './brokers';
import Clients from './clients';
import Stocks from './stocks';

class ClientsStocks extends Model {
  id!: number;

  clientCode!: number;

  brokerId!: number;

  stockId!: number;

  qty!: number;

  averagePrice!: number;
}

ClientsStocks.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  clientCode: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'client',
      key: 'code',
    },
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
  qty: {
    type: INTEGER,
    allowNull: false,
  },
  averagePrice: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'clientsStocks',
  timestamps: false,
});

ClientsStocks.belongsTo(Clients, { foreignKey: 'clientCode', as: 'client' });
Clients.hasMany(ClientsStocks, { foreignKey: 'clientCode', as: 'client' });

ClientsStocks.belongsTo(Brokers, { foreignKey: 'brokerId', as: 'broker' });
Brokers.hasMany(ClientsStocks, { foreignKey: 'brokerId', as: 'broker' });

ClientsStocks.belongsTo(Stocks, { foreignKey: 'stockId', as: 'stock' });
Stocks.hasMany(ClientsStocks, { foreignKey: 'stockId', as: 'stock' });

export default ClientsStocks;
