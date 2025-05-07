
import express from 'express';
import { bikeController } from './bike.controller';
import validateRequest from '../../middleware/validateRequest';
import { bikeValidation } from './bike.validation';



const router = express.Router();

router.post('/', validateRequest(bikeValidation.bikeSchema), bikeController.createBike)
router.get('/', bikeController.getAllBikes);
router.get('/:id', bikeController.getSingleBike);


export const bikeRoutes = router;
