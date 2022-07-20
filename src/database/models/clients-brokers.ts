import { Model, INTEGER, DECIMAL } from 'sequelize';
import db from '.';
// eslint-disable-next-line import/no-cycle
import Brokers from './brokers';
import Clients from './clients';

class ClientsBroker extends Model {
  id!: number;

  client_code!: number;

  broker_id!: number;

  balance!: number;
}

ClientsBroker.init({
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
  modelName: 'clientsBrokers',
  timestamps: false,
});

ClientsBroker.belongsTo(Brokers, { foreignKey: 'broker_id', as: 'broker' });
Brokers.hasMany(ClientsBroker, { foreignKey: 'broker_id', as: 'broker' });

ClientsBroker.belongsTo(Clients, { foreignKey: 'client_code', as: 'client' });
Clients.hasMany(ClientsBroker, { foreignKey: 'client_code', as: 'client' });

export default ClientsBroker;
