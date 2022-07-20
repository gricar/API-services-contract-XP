import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BankingService from '../service';

class BankingController {
  constructor(private bankingService = new BankingService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const clients = await this.bankingService.getAll();

    return res.status(StatusCodes.OK).json(clients);
  };

  public getOneClient = async (req: Request, res: Response): Promise<Response> => {
    const { clientCode } = req.params;

    const client = await this.bankingService.getOne(Number(clientCode));

    if (client.length > 0) return res.status(StatusCodes.OK).json(client);

    return res.status(StatusCodes.NOT_FOUND).json({ message: "Client code doesn't exist" });
  };

  public depositMoney = async (req: Request, res: Response) => {
    const { clientCode, amount } = req.body;

    const [clientExists] = await this.bankingService.getOne(Number(clientCode));

    if (!clientExists) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Client code doesn't exist" });
    }

    const newBalance = (Number(clientExists.balance) + amount);

    await this.bankingService.depositMoney(Number(newBalance), clientCode);

    return res
      .status(StatusCodes.OK)
      .json({ message: `Deposit in the amount of $${amount} was successful!` });
  };
}

export default new BankingController();
