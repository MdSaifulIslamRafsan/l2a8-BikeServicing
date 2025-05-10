import { PrismaClient } from '@prisma/client';
import { IBike } from './bike.interface';
import AppError from '../../errors/AppError';
import { StatusCodes } from 'http-status-codes';

const prisma = new PrismaClient();

const createBikeIntoDB = async (bikeInfo: IBike) => {
  const createCustomer = await prisma.bike.create({
    data: bikeInfo,
  });
  return createCustomer;
};

const getAllBikesFromDB = async () => {
  const bikes = prisma.bike.findMany();
  return bikes;
};

const getSingleBikeFromDB = async (id: string) => {
  const isExist = await prisma.bike.findUnique({
    where: { bikeId: id },
  });

  if (!isExist) {
    throw new AppError(StatusCodes.NOT_FOUND, 'bike not found');
  }

  const bike = prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  return bike;
};

export const bikeService = {
  createBikeIntoDB,
  getAllBikesFromDB,
  getSingleBikeFromDB,
};
