import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync';
import { customerService } from './customer.service';
import sendResponse from '../../shared/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const customerInfo = req.body;

  const result = await customerService.createCustomerIntoDB(customerInfo);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Customer created successfully',
    data: result,
  });
});

const getAllCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await customerService.getAllCustomerFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Customers fetched successfully',
    data: result,
  });
});
const getSingleCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await customerService.getSingleCustomerFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Customer fetched successfully',
    data: result,
  });
});

const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const customerInfo = req.body;
  const result = await customerService.updateCustomerInfoInDB(id, customerInfo);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Customer updated successfully',
    success: true,
    data: result,
  });
});
const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await customerService.deleteCustomerFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Customer deleted successfully',
  });
});
export const customerController = {
  createCustomer,
  getAllCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
