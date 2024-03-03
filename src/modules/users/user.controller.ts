import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.services';

const userRegister = catchAsync(async (req, res) => {
  const response = await UserServices.registerUser(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User register successfully',
    data: response,
  });
});

export const UserController = { userRegister };
