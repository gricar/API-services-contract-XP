import Brokers from '../../database/models/brokers';
import BrokersQtyStocks from '../../database/models/brokers-stocks';
import Stocks from '../../database/models/stocks';
// import { IClientBalance } from '../interfaces/IClientBalance';

export default class InvestmentsService {
  private model = BrokersQtyStocks;

  public getAll = async () => {
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
