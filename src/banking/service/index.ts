import Brokers from '../../database/models/brokers';
import Clients from '../../database/models/clients';
import BalanceClientsBroker from '../../database/models/balance-clients-brokers';
import { IClientBalance } from '../interfaces/IClientBalance';

export default class BankingService {
  private model = BalanceClientsBroker;

  public async getAll(): Promise<IClientBalance[]> {
    const allClients = await this.model.findAll({
      attributes: ['client_code', 'balance'],
      include: [
        { model: Brokers, as: 'broker', attributes: ['name'] },
        { model: Clients, as: 'client', attributes: ['name'] },
      ],
    });

    return allClients;
  }

  public getOne = async (clientCode: number) => {
    const client = await this.model.findAll({
      where: { client_code: clientCode },
      attributes: ['client_code', 'balance'],
      include: [
        { model: Brokers, as: 'broker', attributes: ['name'] },
        { model: Clients, as: 'client', attributes: ['name'] },
      ],
    });

    return client;
  };
}
