module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'clients',
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
    await queryInterface.bulkDelete('clients', null, {});
  },
};
