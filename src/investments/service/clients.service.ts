import Clients from '../../database/models/clients';
import ClientsStocks from '../../database/models/clients-stocks';
import Stocks from '../../database/models/stocks';

export default class ClientsService {
  private model = ClientsStocks;

  private clientModel = Clients;

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
    const clientStock = await this.model.findOne({
      where: {
        clientCode, brokerId, stockId,
      },
    });

    if (!clientStock || clientStock.qty < qtySale) {
      return { message: "It's not possible to sell more than you have in your wallet!" };
    }

    const newWalletQty = clientStock.qty - qtySale;

    return { newWalletQty };
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
