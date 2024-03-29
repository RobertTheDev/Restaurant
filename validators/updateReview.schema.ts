import { z, object, string, number, boolean } from "zod";

// Schema defines the fields required to update a review.
export const updateReviewSchema = object({
    content: string({
        invalid_type_error: "Content must be a string"
    })
        .max(240, { message: "Content must be no more than 240 characters" })
        .min(20, { message: "Content must be at least 20 characters" })
        .optional(),
    public: boolean({
        invalid_type_error: "Public must be a boolean"
    }).optional(),
    rating: number({
        invalid_type_error: "Rating must be a number"
    })
        .min(1, { message: "Rating must be at least 1" })
        .max(1, { message: "Rating must no higher than 5" })
        .optional()
});

// Infers the schema as a TypeScipt type.
export type UpdateReviewSchemaType = z.infer<typeof updateReviewSchema>;
