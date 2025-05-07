import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { Request, Response } from 'express';
import { serviceService } from './service.service';

const createService = catchAsync(async (req: Request, res: Response) => {
  const serviceInfo = req.body;

  const result = await serviceService.createServiceIntoDB(serviceInfo);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Service record added successfully',
    data: result,
  });
});

const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceService.getAllServicesFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Service records fetched successfully',
    data: result,
  });
});

const getSingleService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await serviceService.getSingleServiceFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Service record fetched successfully',
    data: result,
  });
});
const updateService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await serviceService.updateServiceIntoDB(id, payload);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Service updated successfully',
    data: result,
  });
});

export const serviceController = {
  createService,
  getAllServices,
  getSingleService,
  updateService
};
