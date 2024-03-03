import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.routes';
const router = Router();
const appRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
];

appRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
