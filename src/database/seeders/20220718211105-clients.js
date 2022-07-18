module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Clients',
      [
        {
          name: 'Gabriel',
        },
        {
          name: 'Natália',
        },
        {
          name: 'Thiago',
        },
        {
          name: 'Ana',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};
