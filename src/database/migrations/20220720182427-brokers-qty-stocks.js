module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('brokers_available_qty_stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      availableQty: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('brokers_available_qty_stocks');
  },
};
