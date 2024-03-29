import { z, object, string } from "zod";

// Schema defines the fields required to .
export const createProductSchema = object({
    address: string({
        invalid_type_error: "Address must be a string",
        required_error: "Address is required"
    }).min(1, { message: "Address is required" })
});

// Infers the schema as a TypeScipt type.
export type CreateProductSchemaType = z.infer<typeof createProductSchema>;
// menuItemId: string;

// Custom fields
// category: string;
// description: string;
// tags: string[];
// variants: IProductVariant[];
// promotionalMessage: string | null;
// availabilityStatus: string;
// nutrition: {
//     calories: number;
//     fat: number;
//     protein: number;
//     carbohydrates: number;
// };
// discount: {
//     percentage: string;
//     value: number;
// };
// image: IIMage;
// ingredients: IIngredient[];
// heatLevel: {
//     icon: string;
//     level: number;
// };
// name: string;
// allergyWarnings: IAllergy[];
