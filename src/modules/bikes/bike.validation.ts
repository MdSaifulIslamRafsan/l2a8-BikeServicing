import { z } from "zod";

const bikeSchema = z.object({
  body: z.object({
    brand: z.string().min(2, "Brand must be at least 2 characters"),
    model: z.string().min(1, "Model is required"),
    year: z
      .number(),
    customerId: z
      .string()
      .uuid({ message: "Invalid customer ID format" }),
  }),
});

export const bikeValidation = {
    bikeSchema
}