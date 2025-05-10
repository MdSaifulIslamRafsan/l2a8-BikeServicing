"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../errors/AppError"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    let message = err.message || "Something went wrong!";
    let stack = err;
    if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
        message = "Validation Error";
        stack = {
            name: err.name,
            message: err.message,
        };
    }
    else if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        message = err.message;
        stack = {
            code: err.code,
            meta: err.meta,
            clientVersion: err.clientVersion,
            name: err.name,
        };
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err.statusCode;
    }
    res.status(statusCode).json(Object.assign(Object.assign({ success: false, statusCode,
        message }, (process.env.NODE_ENV === 'development' && { stack: err.stack })), { stack }));
};
exports.default = globalErrorHandler;
