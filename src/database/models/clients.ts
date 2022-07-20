import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Clients extends Model {
  code!: number;

  name!: string;
}

Clients.init({
  code: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING(100),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'clients',
  timestamps: false,
});

export default Clients;
