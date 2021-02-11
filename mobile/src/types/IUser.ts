export default interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  occupation?: string;
  email: string;
  birth?: Date;
  phone?: string;
  password_hash: string;
  financeSettings: {
    areas?: string[];
    defaultCurrency?: 'USD' | 'GBP' | 'EUR' | 'DKK' | 'JPY' | 'JPW';
  };
  createdAt: Date;
}
