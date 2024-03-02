import { Schema, model } from 'mongoose';
import { TUser, TUserName } from './user.interface';
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
});
const userSchema = new Schema<TUser>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: userNameSchema,
      required: true,
      _id: false,
    },
    dob: {
      type: Date,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['superAdmin', 'admin'],
      default: 'admin',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model<TUser>('User', userSchema);
