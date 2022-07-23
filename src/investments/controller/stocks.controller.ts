import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ClientsService from '../service/clients.service';
import StocksService from '../service/stocks.service';

class StocksController {
  constructor(
    private stocksService = new StocksService(),
    private clientsService = new ClientsService(),
  ) {}

  public getAllAssets = async (_req: Request, res: Response): Promise<Response> => {
    const assets = await this.stocksService.getAllAssets();

    return res.status(StatusCodes.OK).json(assets);
  };

  public getByTicker = async (req: Request, res: Response): Promise<Response> => {
    const { ticker } = req.params;

    const asset = await this.stocksService.getByTicker(ticker);

    if (!asset) return res.status(StatusCodes.NOT_FOUND).json({ message: "Ticker doesn't exist" });

    return res.status(StatusCodes.OK).json(asset);
  };

  public buy = async (req: Request, res: Response): Promise<Response> => {
    const {
      clientCode, ticker, qty, brokerId, averagePrice,
    } = req.body;

    const obj = await this.stocksService.validateQtyFromBroker(ticker, qty, brokerId);

    if (!obj) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Ticker doesn't exist" });
    }

    const { message, newBrokerQty, stockId } = obj;

    if (message) {
      return res
        .status(StatusCodes.NOT_ACCEPTABLE)
        .json({ message });
    }

    await this.stocksService.updateQtyTable(
      Number(newBrokerQty),
      brokerId,
      Number(stockId),
    );

    await this.stocksService.create(clientCode, brokerId, Number(stockId), qty, averagePrice);

    return res.status(StatusCodes.CREATED).json({ message: 'Successful purchase!' });
  };

  public sell = async (req: Request, res: Response): Promise<Response> => {
    const {
      clientCode, ticker, qty, brokerId,
    } = req.body;

    const stockByTicker = await this.stocksService.getByTicker(ticker);

    if (!stockByTicker) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Ticker doesn't exist" });
    }

    const stockId = stockByTicker.id;

    const isAllowToSale = await this.clientsService.validateQtyFromWallet(
      clientCode,
      stockId,
      qty,
      brokerId,
    );

    const { message, newWalletQty, newBrokerQty } = isAllowToSale;

    if (message) {
      return res.status(StatusCodes.NOT_ACCEPTABLE).json({ message });
    }

    await this.stocksService.updateQtyTable(
      Number(newBrokerQty),
      brokerId,
      Number(stockId),
    );

    await this.clientsService.updateClientStock(
      clientCode,
      brokerId,
      Number(stockId),
      Number(newWalletQty),
    );

    return res.status(StatusCodes.CREATED).json({ message: 'Successful sale!' });
  };
}

export default new StocksController();
