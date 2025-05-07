import { PrismaClient } from '@prisma/client';
import { IBike } from './bike.interface';

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
