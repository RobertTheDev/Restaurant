import type IAllergy from "./Allergy";
import type IIMage from "./Image";

interface IIngredient {
    icon: string;
    ingredient: string;
}

interface IPrice {
    amount: number;
    currency: string;
}

interface IProductVariant {
    quantity: number;
    price: IPrice;
    size: string;
    totalSold: number;
}

export default interface IProduct {
    // Default fields
    id: string;
    createdAt: Date;

    // Foreign fields
    menuItemId: string;

    // Custom fields
    category: string;
    description: string;
    tags: string[];
    variants: IProductVariant[];
    promotionalMessage: string | null;
    availabilityStatus: string;
    nutrition: {
        calories: number;
        fat: number;
        protein: number;
        carbohydrates: number;
    };
    discount: {
        percentage: string;
        value: number;
    };
    image: IIMage;
    ingredients: IIngredient[];
    heatLevel: {
        icon: string;
        level: number;
    };
    name: string;
    allergyWarnings: IAllergy[];
}
