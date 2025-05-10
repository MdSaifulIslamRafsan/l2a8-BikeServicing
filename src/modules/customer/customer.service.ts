import { StatusCodes } from 'http-status-codes';
import { PrismaClient } from '@prisma/client';
import { ICustomer } from './customer.interface';
import AppError from '../../errors/AppError';

const prisma = new PrismaClient();
const createCustomerIntoDB = async (customerInfo: ICustomer) => {
  const createCustomer = await prisma.customer.create({
    data: customerInfo,
  });
  return createCustomer;
};

const getAllCustomerFromDB = async () => {
  const customers = prisma.customer.findMany();
  return customers;
};

const getSingleCustomerFromDB = async (id: string) => {
  const isExist = await prisma.customer.findUnique({
    where: { customerId: id },
  });

  if (!isExist) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Customer not found');
  }
  const customers = prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  return customers;
};

const updateCustomerInfoInDB = async (
  id: string,
  payload: Partial<ICustomer>
) => {
  const isExist = await prisma.customer.findUnique({
    where: { customerId: id },
  });

  if (!isExist) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Customer not found');
  }
  const updatedCustomer = await prisma.customer.update({
    where: {
      customerId: id,
    },

    data: payload,
  });
  return updatedCustomer;
};

const deleteCustomerFromDB = async (id: string) => {
  const isExist = await prisma.customer.findUnique({
    where: { customerId: id },
  });

  if (!isExist) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Customer not found');
  }

  await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
};

export const customerService = {
  createCustomerIntoDB,
  getAllCustomerFromDB,
  getSingleCustomerFromDB,
  updateCustomerInfoInDB,
  deleteCustomerFromDB,
};
