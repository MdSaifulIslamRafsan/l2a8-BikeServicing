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
exports.serviceService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_codes_1 = require("http-status-codes");
const prisma = new client_1.PrismaClient();
const createServiceIntoDB = (serviceInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const createService = yield prisma.serviceRecord.create({
        data: serviceInfo,
    });
    return createService;
});
const getAllServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield prisma.serviceRecord.findMany();
    return services;
});
const getSingleServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.serviceRecord.findUnique({
        where: { serviceId: id },
    });
    if (!isExist) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'service not found');
    }
    const service = yield prisma.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    return service;
});
const updateServiceIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.serviceRecord.findUnique({
        where: { serviceId: id },
    });
    if (!isExist) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'service not found');
    }
    const result = yield prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const updatedService = yield tx.serviceRecord.update({
            where: { serviceId: id },
            data: payload,
        });
        const statusUpdatedService = yield tx.serviceRecord.update({
            where: { serviceId: id },
            data: { status: 'done' },
        });
        return statusUpdatedService;
    }));
    return result;
});
const getOverdueOrPendingServicesFormDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    console.log(sevenDaysAgo);
    const services = yield prisma.serviceRecord.findMany({
        where: {
            status: {
                in: ['pending', 'in_progress']
            },
            serviceDate: {
                lt: sevenDaysAgo
            }
        }
    });
    console.log(services);
    return services;
});
exports.serviceService = {
    createServiceIntoDB,
    getAllServicesFromDB,
    getSingleServiceFromDB,
    updateServiceIntoDB,
    getOverdueOrPendingServicesFormDB
};
