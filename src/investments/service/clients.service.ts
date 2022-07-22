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
}
