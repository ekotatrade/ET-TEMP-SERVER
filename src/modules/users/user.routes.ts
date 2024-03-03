import express, { NextFunction, Request, Response } from 'express';

import upload from '../../middlewares/multer';
import validateRequest from '../../middlewares/validateRequest';
import { UserSchemaValidation } from './user.SchemaValidation';
import { UserController } from './user.controller';

const router = express.Router();

router.post(
  '/register',
  upload.single('image'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(UserSchemaValidation.userSchemaValidation),
  UserController.userRegister,
);

router.get('/', UserController.getAllUser);

export const UserRoutes = router;
//
