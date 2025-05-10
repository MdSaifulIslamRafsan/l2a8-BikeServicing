import { Prisma } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import AppError from "../errors/AppError";


const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  let message = err.message || "Something went wrong!";
  let stack = err;


  if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Validation Error";
    stack = {
      name: err.name,
      message: err.message,
    };
  }

 
  else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    message = err.message;
    stack = {
      code: err.code,
      meta: err.meta,
      clientVersion: err.clientVersion,
      name: err.name,
    };
  }


  else if (err instanceof AppError) {
    statusCode = err.statusCode;
  }


  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    stack,
  });
};

export default globalErrorHandler;
