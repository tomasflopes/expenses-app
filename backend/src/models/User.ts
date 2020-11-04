import mongoose from 'mongoose';
import IUser from '../types/IUser';

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  occupation: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  birth: {
    type: Date
  },
  phone: {
    type: String
  },
  password_hash: {
    type: String,
    required: true
  },
  financeSettings: {
    defaultCurrency: {
      type: String,
      default: 'EUR'
    },
    areas: [
      {
        type: String,
        default: ['undefined']
      }
    ],
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model<IUser>('User', UserSchema);
