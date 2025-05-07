import { z } from 'zod';

const serviceSchema = z.object({
  body: z.object({
    description: z.string().min(5, 'Description is too short'),
    serviceDate: z.string(),
    status: z.enum(["pending", "in_progress", "done"]).optional(),
    completionDate: z.string().optional(),
    bikeId: z.string().uuid('Invalid bike ID'),
  }),
});

 const updateServiceZodSchema = z.object({
  body: z.object({
    description: z.string().optional(),
    serviceDate: z.string().optional(),
    completionDate: z.string().optional(),
    status: z.enum(["pending", "in_progress", "done"]).optional(),
    bikeId: z.string().uuid().optional(),
  }),
});


export const serviceValidation = {
  serviceSchema,
  updateServiceZodSchema
};
