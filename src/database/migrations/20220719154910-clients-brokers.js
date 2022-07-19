module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients_Broker', {
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
          model: 'Clients',
          key: 'code',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      broker_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Brokers',
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
    await queryInterface.dropTable('Clients_Broker');
  },
};
