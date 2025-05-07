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
  const result = await prisma.$transaction(async (tx) => {
    const updatedService = await tx.serviceRecord.update({
      where: { serviceId: id },
      data: payload,
    });

    const statusUpdatedService = await tx.serviceRecord.update({
      where: { serviceId: id },
      data: { status: 'done' },
    });

    return statusUpdatedService;
  });

  return result;
};

const  getOverdueOrPendingServicesFormDB = async()=> {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  console.log(sevenDaysAgo)
  const services = await prisma.serviceRecord.findMany({
    where: {
      status: {
        in: ['pending', 'in_progress']
      },
      serviceDate: {
        lt: sevenDaysAgo
      }
    }
  });
  console.log(services)
  return services
}

export const serviceService = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
  updateServiceIntoDB,
  getOverdueOrPendingServicesFormDB
};
