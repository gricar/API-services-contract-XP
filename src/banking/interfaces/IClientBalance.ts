export interface IClientBalance {
  client_code: number,
  balance: number,
  broker?: {
    name: string;
  };
  client?: {
    name: string;
  };
}
