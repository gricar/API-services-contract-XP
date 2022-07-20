module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'stocks',
      [
        {
          ticker: 'XPBR31',
          actualPrice: 95.24,
        },
        {
          ticker: 'EMBR3',
          actualPrice: 20.66,
        },
        {
          ticker: 'TFCO4',
          actualPrice: 10.12,
        },
        {
          ticker: 'AERI3',
          actualPrice: 6.98,
        },
        {
          ticker: 'FLRY3',
          actualPrice: 12.33,
        },
        {
          ticker: 'SEER3',
          actualPrice: 7.53,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('stocks', null, {});
  },
};
