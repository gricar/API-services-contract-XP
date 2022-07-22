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
  sequelize: db,
  modelName: 'clients_stocks',
  timestamps: false,
});

Stocks.belongsToMany(Clients, {
  through: ClientsStocks, foreignKey: 'stockId', as: 'Clients', otherKey: 'clientCode',
});

Clients.belongsToMany(Stocks, {
  through: ClientsStocks, foreignKey: 'clientCode', as: 'Stocks', otherKey: 'stockId',
});

export default ClientsStocks;
