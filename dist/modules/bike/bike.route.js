"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const bike_validation_1 = require("./bike.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(bike_validation_1.bikeValidation.bikeSchema), bike_controller_1.bikeController.createBike);
router.get('/', bike_controller_1.bikeController.getAllBikes);
router.get('/:id', bike_controller_1.bikeController.getSingleBike);
exports.bikeRoutes = router;
