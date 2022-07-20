module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clients', {
      code: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(7).ZEROFILL,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('clients');
  },
};
