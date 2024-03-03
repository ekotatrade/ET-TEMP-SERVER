// register user

import { UploadObject } from '../../config/aws.s3';
import { ImageSize } from '../../config/imageSizeing';
import { generateUserId } from '../../utils/generateUserId';
import { TUser } from './user.interface';
import { User } from './user.model';

const registerUser = async (userData: TUser, image: any) => {
  const userImage = await UploadObject.putObject(
    image,
    'users',
    ImageSize.USER,
  );
  const userId = await generateUserId(userData.role);
  const result = await User.create({ ...userData, userId, image: userImage });
  return result;
};

const getAllUser = async () => {
  const item = await User.find();
  const result = await UploadObject.getObject(item);
  return result;
};
export const UserServices = { registerUser, getAllUser };
