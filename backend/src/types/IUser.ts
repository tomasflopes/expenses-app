import { Document } from 'mongoose';

export default interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password_hash: string;
  birth: Date;
  phone: string;
  financeSettings?: {
    areas: string[] | ['undefined'];
    currency: 'USD' | 'GBP' | 'EUR' | 'DKK' | 'JPY' | 'JPW';
  };
}
