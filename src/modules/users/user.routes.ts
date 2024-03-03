import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserSchemaValidation } from './user.SchemaValidation';
import { UserController } from './user.controller';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserSchemaValidation.userSchemaValidation),
  UserController.userRegister,
);

export const UserRoutes = router;
