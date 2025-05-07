import { z } from "zod";

 const customerSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    email: z
      .string()
      .email({ message: "Invalid email address" }),
    phone: z
      .string()
  }),
});
const updateCustomerSchema = z.object({
    body: z.object({
      name: z
        .string()
        .min(3, { message: "Name must be at least 3 characters long" }).optional(),
      email: z
        .string()
        .email({ message: "Invalid email address" }).optional(),
      phone: z
        .string().optional()
    }),
  });


 export const customerValidation = {
    customerSchema,
    updateCustomerSchema
  }