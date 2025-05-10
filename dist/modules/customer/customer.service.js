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
exports.customerService = void 0;
const http_status_codes_1 = require("http-status-codes");
const client_1 = require("@prisma/client");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const prisma = new client_1.PrismaClient();
const createCustomerIntoDB = (customerInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const createCustomer = yield prisma.customer.create({
        data: customerInfo,
    });
    return createCustomer;
});
const getAllCustomerFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const customers = prisma.customer.findMany();
    return customers;
});
const getSingleCustomerFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.customer.findUnique({
        where: { customerId: id },
    });
    if (!isExist) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Customer not found');
    }
    const customers = prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    return customers;
});
const updateCustomerInfoInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.customer.findUnique({
        where: { customerId: id },
    });
    if (!isExist) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Customer not found');
    }
    const updatedCustomer = yield prisma.customer.update({
        where: {
            customerId: id,
        },
        data: payload,
    });
    return updatedCustomer;
});
const deleteCustomerFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.customer.findUnique({
        where: { customerId: id },
    });
    if (!isExist) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Customer not found');
    }
    yield prisma.customer.delete({
        where: {
            customerId: id,
        },
    });
});
exports.customerService = {
    createCustomerIntoDB,
    getAllCustomerFromDB,
    getSingleCustomerFromDB,
    updateCustomerInfoInDB,
    deleteCustomerFromDB,
};
