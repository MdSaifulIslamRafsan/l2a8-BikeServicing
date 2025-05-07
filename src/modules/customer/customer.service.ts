import { PrismaClient } from '@prisma/client';
import { ICustomer } from './customer.interface';

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
  const updatedCustomer = await prisma.customer.update({
    where: {
      customerId: id,
    },

    data: payload,
  });
  return updatedCustomer;
};

const deleteCustomerFromDB = async (id: string) => {
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
