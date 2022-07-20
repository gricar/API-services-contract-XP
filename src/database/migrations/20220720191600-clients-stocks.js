module.exports = {
  // eslint-disable-next-line max-lines-per-function
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clients_stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clientCode: {
        allowNull: false,
        type: Sequelize.INTEGER(7).ZEROFILL,
        references: {
          model: 'clients',
          key: 'code',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      brokerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'brokers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      stockId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'stocks',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      qty: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      averagePrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('clients_stocks');
  },
};
