"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidation = void 0;
const zod_1 = require("zod");
const serviceSchema = zod_1.z.object({
    body: zod_1.z.object({
        description: zod_1.z.string().min(5, 'Description is too short'),
        serviceDate: zod_1.z.string(),
        status: zod_1.z.enum(["pending", "in_progress", "done"]).optional(),
        completionDate: zod_1.z.string().optional(),
        bikeId: zod_1.z.string().uuid('Invalid bike ID'),
    }),
});
const updateServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        description: zod_1.z.string().optional(),
        serviceDate: zod_1.z.string().optional(),
        completionDate: zod_1.z.string().optional(),
        status: zod_1.z.enum(["pending", "in_progress", "done"]).optional(),
        bikeId: zod_1.z.string().uuid().optional(),
    }),
});
exports.serviceValidation = {
    serviceSchema,
    updateServiceZodSchema
};
