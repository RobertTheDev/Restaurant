import { z, object, string } from "zod";

// Schema defines the fields required to update a user's email address.
export const updateEmailSchema = object({
    email: string({
        invalid_type_error: "Email must be a string"
    })
        .email({ message: "Email must be a valid email address" })
        .min(3, { message: "Email must be at least 3 characters" })
});

// Infers the schema as a TypeScipt type.
export type UpdateEmailSchemaType = z.infer<typeof updateEmailSchema>;
