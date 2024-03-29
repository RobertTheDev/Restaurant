import { z, object, string } from "zod";

// Schema defines the fields required to sign in a user with a magic link.
export const signInWithMagicLinkSchema = object({
    email: string({
        invalid_type_error: "Email must be a string",
        required_error: "Email is required"
    })
        .email({ message: "Email must be a valid email address" })
        .min(1, { message: "Email is required" }),
    name: string({
        invalid_type_error: "Name must be a string",
        required_error: "Name is required"
    }).min(2, { message: "Name must be at least 2 characters" })
});

// Infers the schema as a TypeScipt type.
export type SignInWithMagicLinkSchemaType = z.infer<
    typeof signInWithMagicLinkSchema
>;
