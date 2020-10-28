import mongoose, { Document } from 'mongoose';

export default interface IUser {
  _id: string;
  name: string;
  email: string;
  password_hash: string;
  birth: Date;
  phone: string;
  financeSettings: {
    areas: string[];
    currency: 'USD' | 'GBP' | 'EUR' | 'DKK' | 'JPY' | 'JPW';
  };
}

export interface IUserSchema extends Document {
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
