import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { Request, Response } from 'express';
import { bikeService } from './bike.service';

const createBike = catchAsync(async (req: Request, res: Response) => {
  const bikeInfo = req.body;

  const result = await bikeService.createBikeIntoDB(bikeInfo);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Bike added successfully',
    data: result,
  });
});

const getAllBikes = catchAsync(async (req: Request, res: Response) => {
  const result = await bikeService.getAllBikesFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Bikes fetched successfully',
    data: result,
  });
});
const getSingleBike = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bikeService.getSingleBikeFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Bike fetched successfully',
    data: result,
  });
});

export const bikeController = {
  createBike,
  getAllBikes,
  getSingleBike,
};
