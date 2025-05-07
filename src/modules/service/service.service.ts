import { PrismaClient } from '@prisma/client';
import { IService } from './service.interface';

const prisma = new PrismaClient();

const createServiceIntoDB = async (serviceInfo: IService) => {
  const createService = await prisma.serviceRecord.create({
    data: serviceInfo,
  });
  return createService;
};

const getAllServicesFromDB = async () => {
  const services = await prisma.serviceRecord.findMany();
  return services;
};

const getSingleServiceFromDB = async (id: string) => {
  const service = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });
  return service;
};
const updateServiceIntoDB = async (id: string, payload: Partial<IService>) => {
  const updatedService = await prisma.serviceRecord.update({
    where: { serviceId: id },
    data: payload,
  });
  return updatedService;
};


export const serviceService = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
  updateServiceIntoDB
};
