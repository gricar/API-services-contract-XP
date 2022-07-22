import Brokers from '../../database/models/brokers';
import BrokersQtyStocks from '../../database/models/brokers-stocks';
import ClientsStocks from '../../database/models/clients-stocks';
import Stocks from '../../database/models/stocks';
import { IAssets } from '../interfaces/IAssets';

export default class StocksService {
  private model = BrokersQtyStocks;

  private stocksModel = Stocks;

  private availableStocks = BrokersQtyStocks;

  private clientsStocks = ClientsStocks;

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

  public validateQty = async (ticker: string, qty: number, brokerId: number) => {
    const tickerByBrokers = await this.getByTicker(ticker);

    if (!tickerByBrokers) return null;

    const stockId = tickerByBrokers?.id;

    const broker = await this.availableStocks.findOne({
      where: { brokerId, stockId },
    });

    if (!broker || broker.availableQty < qty) {
      return { message: "It's not possible to buy this quantity!" };
    }

    const newBrokerQty = broker.availableQty - qty;

    return { newBrokerQty, stockId };
  };

  public updateTables = async (
    clientCode: number,
    stockId: number,
    newBrokerQty: number,
    qty: number,
    brokerId: number,
    averagePrice: number,
  ) => {
    await this.availableStocks.update({ availableQty: newBrokerQty }, { where: { id: brokerId } });

    await this.clientsStocks.create(
      {
        clientCode, brokerId, stockId, qty, averagePrice,
      },
    );
  };
}
