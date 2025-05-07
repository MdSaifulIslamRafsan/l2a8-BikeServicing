import express from 'express';
import { customerRoutes } from '../modules/customer/customer.routes';
import { bikeRoutes } from '../modules/bike/bike.route';
import { serviceRoutes } from '../modules/service/service.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: customerRoutes,
  },
  {
    path : '/bikes',
    route : bikeRoutes
  },
  {
    path: '/services',
    route : serviceRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
