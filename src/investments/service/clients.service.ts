import BrokersQtyStocks from '../../database/models/brokers-stocks';
import Clients from '../../database/models/clients';
import ClientsStocks from '../../database/models/clients-stocks';
import Stocks from '../../database/models/stocks';

export default class ClientsService {
  private model = ClientsStocks;

  private clientModel = Clients;

  private availableStocks = BrokersQtyStocks;

  public getByClientCode = async (clientCode: number) => {
    const assetsByClient = await this.clientModel.findOne({
      where: { code: clientCode },
      attributes: { exclude: ['code'] },
      include: [
        {
          model: Stocks,
          as: 'Stocks',
          attributes: ['ticker'],
          through: { attributes: ['qty', 'averagePrice'] },
        },
      ],
    });

    return assetsByClient;
  };

  public validateQtyFromWallet = async (
    clientCode: number,
    stockId: number,
    qtySale: number,
    brokerId: number,
  ) => {
    const stockFromClientWallet = await this.model.findOne({
      where: {
        clientCode, brokerId, stockId,
      },
    });

    if (!stockFromClientWallet) return { message: 'Invalid data!' };

    if (stockFromClientWallet.qty < qtySale) {
      return { message: "It's not possible to sell more than you have in your wallet!" };
    }

    const newWalletQty = stockFromClientWallet.qty - qtySale;

    const broker = await this.availableStocks.findOne({
      where: { brokerId, stockId },
    });

    if (!broker) return { message: 'Invalid data!' };

    const newBrokerQty = broker.availableQty + qtySale;

    return { newWalletQty, newBrokerQty };
  };

  public updateClientStock = async (
    clientCode: number,
    brokerId: number,
    stockId: number,
    newWalletQty: number,
  ) => {
    await this.model.update({ qty: newWalletQty }, { where: { clientCode, brokerId, stockId } });
  };
}
