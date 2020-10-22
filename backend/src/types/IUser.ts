import mongoose, { Document } from 'mongoose';

export default interface IUser extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  email: string;
  password_hash: string;
  birth: Date;
  phone: string;
}
