module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'brokers',
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
    await queryInterface.bulkDelete('brokers', null, {});
  },
};
