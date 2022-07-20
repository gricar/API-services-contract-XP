module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'clients_stocks',
      [
        {
          clientCode: 1,
          brokerId: 1,
          stockId: 1,
          qty: 100,
          averagePrice: 50,
        },
        {
          clientCode: 1,
          brokerId: 1,
          stockId: 2,
          qty: 200,
          averagePrice: 20,
        },
        {
          clientCode: 2,
          brokerId: 1,
          stockId: 1,
          qty: 30,
          averagePrice: 33,
        },
        {
          clientCode: 2,
          brokerId: 1,
          stockId: 3,
          qty: 90,
          averagePrice: 3,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('clients_stocks', null, {});
  },
};
