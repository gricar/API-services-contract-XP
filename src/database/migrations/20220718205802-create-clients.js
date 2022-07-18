module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      code: {
        allowNull: false,
        type: Sequelize.INTEGER(7).ZEROFILL,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('clients');
  },
};
