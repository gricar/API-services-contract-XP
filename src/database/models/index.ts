import { Sequelize } from 'sequelize';

import * as dbConfig from '../config/database';

export default new Sequelize(dbConfig);
