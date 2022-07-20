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
  client_code: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'client',
      key: 'code',
    },
  },
  broker_id: {
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

BalanceClientsBrokers.belongsTo(Brokers, { foreignKey: 'broker_id', as: 'broker' });
Brokers.hasMany(BalanceClientsBrokers, { foreignKey: 'broker_id', as: 'broker' });

BalanceClientsBrokers.belongsTo(Clients, { foreignKey: 'client_code', as: 'client' });
Clients.hasMany(BalanceClientsBrokers, { foreignKey: 'client_code', as: 'client' });

export default BalanceClientsBrokers;
