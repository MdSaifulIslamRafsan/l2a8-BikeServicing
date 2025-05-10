"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const service_validation_1 = require("./service.validation");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(service_validation_1.serviceValidation.serviceSchema), service_controller_1.serviceController.createService);
router.get('/', service_controller_1.serviceController.getAllServices);
router.get('/status', service_controller_1.serviceController.getOverdueOrPendingServices);
router.get('/:id', service_controller_1.serviceController.getSingleService);
router.patch('/:id', (0, validateRequest_1.default)(service_validation_1.serviceValidation.updateServiceZodSchema), service_controller_1.serviceController.updateService);
exports.serviceRoutes = router;
