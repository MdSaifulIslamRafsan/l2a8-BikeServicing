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
exports.bikeService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_codes_1 = require("http-status-codes");
const prisma = new client_1.PrismaClient();
const createBikeIntoDB = (bikeInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const createCustomer = yield prisma.bike.create({
        data: bikeInfo,
    });
    return createCustomer;
});
const getAllBikesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = prisma.bike.findMany();
    return bikes;
});
const getSingleBikeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.bike.findUnique({
        where: { bikeId: id },
    });
    if (!isExist) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'bike not found');
    }
    const bike = prisma.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    return bike;
});
exports.bikeService = {
    createBikeIntoDB,
    getAllBikesFromDB,
    getSingleBikeFromDB,
};
