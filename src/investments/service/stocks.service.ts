import Brokers from '../../database/models/brokers';
import BrokersQtyStocks from '../../database/models/brokers-stocks';
import Stocks from '../../database/models/stocks';
import { IAssets } from '../interfaces/IAssets';

export default class StocksService {
  private model = BrokersQtyStocks;

  private stocksModel = Stocks;

  private availableStocks = BrokersQtyStocks;

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

  public buy = async (clientCode: number, ticker: string, qty: number, brokerId: number) => {
    const tickerByBrokers = await this.getByTicker(ticker);

    const broker = await this.availableStocks.findOne({
      where: { brokerId, stockId: tickerByBrokers?.id },
    });

    if (!broker) return null;

    if (broker.availableQty < qty) {
      return { message: "It's not possible to buy this quantity!" };
    }

    const newBrokerQty = broker.availableQty - qty;

    this.updateTables(newBrokerQty, broker.id);

    return true;
  };

  private updateTables = async (newBrokerQty: number, brokerId: number) => {
    await this.availableStocks.update({ availableQty: newBrokerQty }, { where: { id: brokerId } });
  };
}
