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
exports.serviceController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const service_service_1 = require("./service.service");
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceInfo = req.body;
    const result = yield service_service_1.serviceService.createServiceIntoDB(serviceInfo);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: 'Service record created successfully',
        data: result,
    });
}));
const getAllServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceService.getAllServicesFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Service records fetched successfully',
        data: result,
    });
}));
const getSingleService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_service_1.serviceService.getSingleServiceFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Service record fetched successfully',
        data: result,
    });
}));
const updateService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const payload = req.body;
    const result = yield service_service_1.serviceService.updateServiceIntoDB(id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Service marked as completed',
        data: result,
    });
}));
const getOverdueOrPendingServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('sad');
    const result = yield service_service_1.serviceService.getOverdueOrPendingServicesFormDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Overdue or pending services fetched successfully',
        data: result,
    });
}));
exports.serviceController = {
    createService,
    getAllServices,
    getSingleService,
    updateService,
    getOverdueOrPendingServices,
};
