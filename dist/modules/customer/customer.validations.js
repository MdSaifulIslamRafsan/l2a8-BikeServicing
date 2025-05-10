"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerValidation = void 0;
const zod_1 = require("zod");
const customerSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(3, { message: "Name must be at least 3 characters long" }),
        email: zod_1.z
            .string()
            .email({ message: "Invalid email address" }),
        phone: zod_1.z
            .string()
    }),
});
const updateCustomerSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(3, { message: "Name must be at least 3 characters long" }).optional(),
        email: zod_1.z
            .string()
            .email({ message: "Invalid email address" }).optional(),
        phone: zod_1.z
            .string().optional()
    }),
});
exports.customerValidation = {
    customerSchema,
    updateCustomerSchema
};
