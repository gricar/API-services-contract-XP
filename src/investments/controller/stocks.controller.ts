import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import StocksService from '../service/stocks.service';

class StocksController {
  constructor(private stocksService = new StocksService()) {}

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

    await this.stocksService.updateTables(
      clientCode,
      Number(stockId),
      Number(newBrokerQty),
      qty,
      brokerId,
      averagePrice,
    );

    return res.status(StatusCodes.OK).json({ message: 'Compra realizada com sucesso' });
  };
}

export default new StocksController();
