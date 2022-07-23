export interface IBrokerBalance {
  id?: number;
  name: string;
  clientsBalanceByBrokers: {
    balance: number;
  }
}

export interface IClientBalance {
  code: number;
  name: string;
  brokers: IBrokerBalance[];
}
