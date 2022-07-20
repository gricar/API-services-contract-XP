import Brokers from '../../database/models/brokers';
import Clients from '../../database/models/clients';
import BalanceClientsBroker from '../../database/models/balance-clients-brokers';
import { IClientBalance } from '../interfaces/IClientBalance';

export default class BankingService {
  private model = BalanceClientsBroker;

  public getAll = async (): Promise<IClientBalance[]> => {
    const allClients = await this.model.findAll({
      attributes: ['clientCode', 'balance'],
      include: [
        { model: Brokers, as: 'broker', attributes: ['name'] },
        { model: Clients, as: 'client', attributes: ['name'] },
      ],
    });

    return allClients;
  };

  public getOne = async (clientCode: number): Promise<IClientBalance[]> => {
    const client = await this.model.findAll({
      where: { clientCode },
      attributes: ['clientCode', 'balance'],
      include: [
        { model: Brokers, as: 'broker', attributes: ['name'] },
        { model: Clients, as: 'client', attributes: ['name'] },
      ],
    });

    return client;
  };

  public depositMoney = async (balance: number, clientCode: number) => {
    await this.model.update(
      { balance },
      { where: { clientCode } },
    );
  };
}
