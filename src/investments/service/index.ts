import Brokers from '../../database/models/brokers';
import BrokersQtyStocks from '../../database/models/brokers-stocks';
import Stocks from '../../database/models/stocks';
import { IAssets } from '../interfaces/IAssets';

export default class InvestmentsService {
  private model = BrokersQtyStocks;

  public getAllAssets = async (): Promise<IAssets[]> => {
    const allAssets = await this.model.findAll({
      attributes: ['availableQty'],
      include: [
        { model: Brokers, as: 'Broker', attributes: ['name'] },
        { model: Stocks, as: 'stock', attributes: ['ticker', 'actualPrice'] },
      ],
    });

    return allAssets;
  };
}
