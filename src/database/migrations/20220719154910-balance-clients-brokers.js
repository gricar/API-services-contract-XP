module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('balance_clients_brokers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      client_code: {
        allowNull: false,
        type: Sequelize.INTEGER(7).ZEROFILL,
        references: {
          model: 'clients',
          key: 'code',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      broker_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'brokers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      balance: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('balance_clients_brokers');
  },
};
