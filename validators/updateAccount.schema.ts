import { z, object, string } from "zod";

// Schema defines the fields required to update a user account.
export const updateAccountSchema = object({
    name: string({
        invalid_type_error: "Name must be a string"
    })
        .min(2, { message: "Name must be at least 2 characters" })
        .optional()
});

// Infers the schema as a TypeScipt type.
export type UpdateAccountSchemaType = z.infer<typeof updateAccountSchema>;
