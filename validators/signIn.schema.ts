import { z, object, string } from "zod";

// Schema defines the fields required to sign in a user.
export const signInSchema = object({
    email: string({
        invalid_type_error: "Email must be of type string",
        required_error: "Email is required"
    })
        .email({ message: "Email must be in valid email format" })
        .min(1, { message: "Email is required" })
});

// Infers the schema as a TypeScipt type.
export type SignInSchemaType = z.infer<typeof signInSchema>;
