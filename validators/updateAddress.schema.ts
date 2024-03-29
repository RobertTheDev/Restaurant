import { z, object, string } from "zod";

// Schema defines the fields required to update a customer's address.
export const updateCustomerAddressSchema = object({
    address: string({
        invalid_type_error: "Address must be a string"
    })
        .min(1, { message: "Address is required" })
        .optional(),
    city: string({
        invalid_type_error: "City must be a string"
    })
        .min(1, { message: "City or town is required" })
        .optional(),
    country: string({
        invalid_type_error: "Country must be a string"
    })
        .min(1, { message: "Country is required" })
        .optional(),
    name: string({
        invalid_type_error: "Name must be a string"
    })
        .min(1, { message: "Name must be at least 1 character" })
        .optional(),

    postalCode: string({
        invalid_type_error: "Postal code must be a string"
    })
        .min(1, { message: "Postal code is required" })
        .optional(),
    region: string({
        invalid_type_error: "Region must be a string"
    })
        .min(1, { message: "Region is required" })
        .optional()
});

// Infers the schema as a TypeScipt type.
export type UpdateCustomerAddressSchemaType = z.infer<
    typeof updateCustomerAddressSchema
>;
