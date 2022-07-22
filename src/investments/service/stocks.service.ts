import Brokers from '../../database/models/brokers';
import BrokersQtyStocks from '../../database/models/brokers-stocks';
import Stocks from '../../database/models/stocks';
import { IAssets } from '../interfaces/IAssets';

export default class StocksService {
  private model = BrokersQtyStocks;

  private stocksModel = Stocks;

  public getAllAssets = async (): Promise<IAssets[]> => {
    const assets = await this.stocksModel.findAll({
      include: [
        {
          model: Brokers,
          as: 'brokers',
          attributes: ['name'],
          through: { attributes: ['availableQty'] },
        },
      ],
    });

    return assets;
  };

  public getByTicker = async (ticker: string): Promise<IAssets | null> => {
    const asset = await this.stocksModel.findOne({
      where: { ticker },
      attributes: { exclude: ['id'] },
      include: [
        {
          model: Brokers,
          as: 'brokers',
          attributes: ['name'],
          through: { attributes: ['availableQty'] },
        },
      ],
    });

    return asset;
  };
}
