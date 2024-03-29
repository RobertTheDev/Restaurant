import { z, object, string } from "zod";

// Schema defines the fields required to update a payment card.
export const updatePaymentCardSchema = object({
    address: string({
        invalid_type_error: "Address must be a string",
        required_error: "Address is required"
    }).min(1, { message: "Address is required" })
});

// Infers the schema as a TypeScipt type.
export type UpdatePaymentCardSchemaType = z.infer<
    typeof updatePaymentCardSchema
>;
// cardholderName: string;
// cardNumber: string;
// expirationDate: string;
// securityCode: string;
// type: string;
