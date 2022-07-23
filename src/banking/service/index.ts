import Brokers from '../../database/models/brokers';
import Clients from '../../database/models/clients';
import BalanceClientsBroker from '../../database/models/balance-clients-brokers';
import { IClientBalance } from '../interfaces/IClientBalance';
import TokenAuthentication from '../../utils/jwt';
import IUserLogin from '../interfaces/IUserLogin';

export default class BankingService {
  private model = BalanceClientsBroker;

  private modelClients = Clients;

  public getAll = async (): Promise<IClientBalance[]> => {
    const allClients = await this.modelClients.findAll({
      include: [
        {
          model: Brokers,
          as: 'brokers',
          attributes: ['name'],
          through: { attributes: ['balance'] },
        },
      ],
    });

    return allClients;
  };

  public getOne = async (clientCode: number): Promise<IClientBalance | null> => {
    const client = await this.modelClients.findOne({
      where: { code: clientCode },
      include: [
        {
          model: Brokers,
          as: 'brokers',
          through: { attributes: ['balance'] },
        },
      ],
    });

    return client;
  };

  public updateBalance = async (
    balance: number,
    clientCode: number,
    brokerId: number,
  ): Promise<void> => {
    await this.model.update(
      { balance },
      { where: { clientCode, brokerId } },
    );
  };

  public authenticate = async (user: IUserLogin) => {
    const { username } = user;

    const existUser = await this.modelClients.findOne({
      where: { name: username },
    });

    const tokenGenerator = new TokenAuthentication();

    if (existUser) {
      const token = tokenGenerator.generateJWTToken(user);
      return token;
    }

    return existUser;
  };
}
