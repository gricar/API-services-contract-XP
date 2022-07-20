module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'clients_brokers',
      [
        {
          client_code: 1,
          broker_id: 1,
          balance: 7000,
        },
        {
          client_code: 1,
          broker_id: 2,
          balance: 2000,
        },
        {
          client_code: 2,
          broker_id: 1,
          balance: 8000,
        },
        {
          client_code: 3,
          broker_id: 1,
          balance: 9000,
        },
        {
          client_code: 4,
          broker_id: 1,
          balance: 6000,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('clients_brokers', null, {});
  },
};
