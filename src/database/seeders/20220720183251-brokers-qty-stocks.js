const stocksId = [1, 2, 3, 4, 5, 6];

const generateTableInfo = (brokerId, availableQty) => {
  let stocksFromBroker = [];

  stocksId.forEach((stockId) => {
    const objTable = { brokerId, stockId, availableQty };
    stocksFromBroker = [...stocksFromBroker, objTable];
  });

  return stocksFromBroker;
};

const stocksFromFirstBroker = generateTableInfo(1, 500000);
const stocksFromSecondBroker = generateTableInfo(2, 100000);
const stocksFromThirdBroker = generateTableInfo(3, 300000);

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'brokers_available_qty_stocks',
      [
        ...stocksFromFirstBroker,
        ...stocksFromSecondBroker,
        ...stocksFromThirdBroker,
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('brokers_available_qty_stocks', null, {});
  },
};
