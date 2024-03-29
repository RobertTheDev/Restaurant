import { z, object, string } from "zod";

// Schema defines the fields required to create an address.
export const createCustomerAddressSchema = object({
    address: string({
        invalid_type_error: "Address must be a string",
        required_error: "Address is required"
    }).min(1, { message: "Address is required" }),
    city: string({
        invalid_type_error: "City must be a string",
        required_error: "City or town is required"
    }).min(1, { message: "City or town is required" }),
    country: string({
        invalid_type_error: "Country must be a string",
        required_error: "Country is required"
    }).min(1, { message: "Country is required" }),
    name: string({
        invalid_type_error: "Name must be a string"
    })
        .min(1, { message: "Name must be at least 1 character" })
        .optional(),

    postalCode: string({
        invalid_type_error: "Postal code must be a string",
        required_error: "Postal code is required"
    }).min(1, { message: "Postal code is required" }),
    region: string({
        invalid_type_error: "Region must be a string"
    })
        .min(1, { message: "Region is required" })
        .optional()
});

// Infers the schema as a TypeScipt type.
export type CreateCustomerAddressSchemaType = z.infer<
    typeof createCustomerAddressSchema
>;
