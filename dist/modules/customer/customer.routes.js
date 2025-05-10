"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const customer_validations_1 = require("./customer.validations");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(customer_validations_1.customerValidation.customerSchema), customer_controller_1.customerController.createCustomer);
router.get('/', customer_controller_1.customerController.getAllCustomer);
router.get('/:id', customer_controller_1.customerController.getSingleCustomer);
router.put('/:id', (0, validateRequest_1.default)(customer_validations_1.customerValidation.updateCustomerSchema), customer_controller_1.customerController.updateCustomer);
router.delete('/:id', customer_controller_1.customerController.deleteCustomer);
exports.customerRoutes = router;
