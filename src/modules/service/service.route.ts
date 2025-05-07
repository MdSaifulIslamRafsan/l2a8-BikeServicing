import express from 'express';
import { serviceController } from './service.controller';
import {serviceValidation } from './service.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post('/', validateRequest(serviceValidation.serviceSchema), serviceController.createService);
router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getSingleService);
router.patch('/:id', validateRequest(serviceValidation.updateServiceZodSchema), serviceController.updateService);


export const serviceRoutes = router;
