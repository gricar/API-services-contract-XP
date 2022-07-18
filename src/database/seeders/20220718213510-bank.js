module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Bank',
      [
        {
          client_code: 1,
          balance: 7000,
        },
        {
          client_code: 2,
          balance: 8000,
        },
        {
          client_code: 3,
          balance: 9000,
        },
        {
          client_code: 4,
          balance: 6000,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Bank', null, {});
  },
};
