"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const customer_service_1 = require("./customer.service");
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const createCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerInfo = req.body;
    const result = yield customer_service_1.customerService.createCustomerIntoDB(customerInfo);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: 'Customer created successfully',
        data: result,
    });
}));
const getAllCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerService.getAllCustomerFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Customers fetched successfully',
        data: result,
    });
}));
const getSingleCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customer_service_1.customerService.getSingleCustomerFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Customer fetched successfully',
        data: result,
    });
}));
const updateCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const customerInfo = req.body;
    const result = yield customer_service_1.customerService.updateCustomerInfoInDB(id, customerInfo);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Customer updated successfully',
        success: true,
        data: result,
    });
}));
const deleteCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield customer_service_1.customerService.deleteCustomerFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Customer deleted successfully',
    });
}));
exports.customerController = {
    createCustomer,
    getAllCustomer,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer,
};
