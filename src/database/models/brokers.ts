import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Brokers extends Model {
  id!: number;

  name!: string;
}

Brokers.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'brokers',
  timestamps: false,
});

export default Brokers;
