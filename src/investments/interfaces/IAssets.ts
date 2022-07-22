export interface IAssets {
  id: number;
  ticker: string;
  actualPrice: number;
  brokers?: {
    name: string;
    availableQty: number,
  };
}
