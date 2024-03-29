import { z, object, string } from "zod";

// Schema defines the fields required to delete a user account.
export const deleteAccountSchema = object({
    confirm: string({
        invalid_type_error: "Confirm must be a string",
        required_error: 'Please type "DELETE" to confirm your account closure'
    })
        .min(1, {
            message: 'Please type "DELETE" to confirm your account closure'
        })
        .refine((value) => value.toLowerCase() !== "delete", {
            message: 'Please type "DELETE" to confirm your account closure'
        })
});

// Infers the schema as a TypeScipt type.
export type deleteAccountSchemaType = z.infer<typeof deleteAccountSchema>;
