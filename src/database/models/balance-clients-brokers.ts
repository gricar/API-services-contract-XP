import { Model, INTEGER, DECIMAL } from 'sequelize';
import db from '.';
// eslint-disable-next-line import/no-cycle
import Brokers from './brokers';
import Clients from './clients';

class BalanceClientsBrokers extends Model {
  id!: number;

  client_code!: number;

  broker_id!: number;

  balance!: number;
}

BalanceClientsBrokers.init({
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
  balance: {
    type: DECIMAL(6, 2),
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'clientsBalanceByBrokers',
  timestamps: false,
});

BalanceClientsBrokers.belongsTo(Brokers, { foreignKey: 'brokerId', as: 'broker' });
Brokers.hasMany(BalanceClientsBrokers, { foreignKey: 'brokerId', as: 'broker' });

BalanceClientsBrokers.belongsTo(Clients, { foreignKey: 'clientCode', as: 'client' });
Clients.hasMany(BalanceClientsBrokers, { foreignKey: 'clientCode', as: 'client' });

export default BalanceClientsBrokers;
