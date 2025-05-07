import express from 'express';
import { customerRoutes } from '../modules/customer/customer.routes';
import { bikeRoutes } from '../modules/bikes/bike.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: customerRoutes,
  },
  {
    path : '/bikes',
    route : bikeRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
