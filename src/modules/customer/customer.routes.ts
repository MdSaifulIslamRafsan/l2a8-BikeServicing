import express from 'express';
import { customerController } from './customer.controller';
import validateRequest from '../../middleware/validateRequest';
import { customerValidation } from './customer.validations';


const router = express.Router();

router.post(
  '/',
  validateRequest(customerValidation.customerSchema),
  customerController.createCustomer
);
router.get('/', customerController.getAllCustomer);
router.get('/:id', customerController.getSingleCustomer);
router.put('/:id', validateRequest(customerValidation.updateCustomerSchema), customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);
export const customerRoutes = router;
