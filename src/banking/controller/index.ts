import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IBroker } from '../interfaces/IClientBalance';
import BankingService from '../service';
import calculateNewBalance from '../utils/calculateNewBalance';

class BankingController {
  constructor(private bankingService = new BankingService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const clients = await this.bankingService.getAll();

    return res.status(StatusCodes.OK).json(clients);
  };

  public getOneClient = async (req: Request, res: Response): Promise<Response> => {
    const { clientCode } = req.params;

    const client = await this.bankingService.getOne(Number(clientCode));

    if (!client) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Client code doesn't exist" });
    }

    return res.status(StatusCodes.OK).json(client);
  };

  public moneyTransaction = async (req: Request, res: Response): Promise<Response> => {
    const { clientCode, amount, brokerId } = req.body;

    const clientExists = await this.bankingService.getOne(Number(clientCode));

    if (!clientExists) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Client code doesn't exist" });
    }

    const { brokers } = clientExists;

    let newBalance = 0;

    brokers.forEach((broker: IBroker) => {
      if (broker.id === brokerId) {
        const actualBalance = Number(broker.clientsBalanceByBrokers.balance);
        newBalance = calculateNewBalance(amount, actualBalance, req.path);
      }
    });

    await this.bankingService.updateBalance(Number(newBalance), clientCode, brokerId);

    return res
      .status(StatusCodes.OK)
      .json({
        message: `${req.path.includes('saque')
          ? 'Withdraw'
          : 'Deposit'} in the amount of $${amount} was successful!`,
      });
  };
}

export default new BankingController();
