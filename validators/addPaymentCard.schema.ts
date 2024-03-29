import { z, object, string, number } from "zod";

// Schema defines the fields required to create a payment card.
export const createPaymentCardSchema = object({
    cardholderName: string({
        invalid_type_error: "Cardholder name must be a string",
        required_error: "Cardholder name is required"
    }).min(1, { message: "Cardholder name is required" }),
    cardNumber: number({
        invalid_type_error: "Card number must be a number",
        required_error: "Card number is required"
    }).min(1, { message: "Card number is required" })
});

// Infers the schema as a TypeScipt type.
export type CreatePaymentCardSchemaType = z.infer<
    typeof createPaymentCardSchema
>;

// expirationDate: string;
// securityCode: string;
// type: string;
