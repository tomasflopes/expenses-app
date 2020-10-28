import mongoose from 'mongoose';
import { IUserSchema } from '../types/IUser';

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password_hash: {
    type: String,
    required: true
  },
  birth: {
    type: Date,
    required: true
  },
  phone: {
    type: String
  },
  financeSettings: {
    areas: [
      {
        type: String
      }
    ],
    currency: {
      type: String,
      default: 'EUR'
    },
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IUserSchema>('User', UserSchema);
