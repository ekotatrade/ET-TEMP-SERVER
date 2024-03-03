// register user

import { generateUserId } from '../../utils/generateUserId';
import { TUser } from './user.interface';
import { User } from './user.model';

const registerUser = async (userData: TUser) => {
  const userId = await generateUserId(userData.role);
  const result = await User.create({ ...userData, userId });
  return result;
};

export const UserServices = { registerUser };
