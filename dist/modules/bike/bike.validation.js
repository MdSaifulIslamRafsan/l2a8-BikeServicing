"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeValidation = void 0;
const zod_1 = require("zod");
const bikeSchema = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string().min(2, "Brand must be at least 2 characters"),
        model: zod_1.z.string().min(1, "Model is required"),
        year: zod_1.z
            .number(),
        customerId: zod_1.z
            .string()
            .uuid({ message: "Invalid customer ID format" }),
    }),
});
exports.bikeValidation = {
    bikeSchema
};
