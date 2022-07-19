module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Brokers',
      [
        {
          name: 'XP Investimentos',
        },
        {
          name: 'Rico',
        },
        {
          name: 'Clear',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Brokers', null, {});
  },
};
