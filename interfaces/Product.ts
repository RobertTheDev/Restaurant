export default interface IProduct {
    id: string;
    createdAt: Date;
    quantity: number;
    category: string;
    menuItemId: string;
    description: string;
    tags: {
        value: string;
        icon: string;
    }[];
    reviews: {
        userId: string;
        rating: number;
        comment: string;
        date: Date;
    }[];
    totalReviews: number;
    totalScore: number;
    options: {
        name: string;
        price: number;
    }[];
    variants: string[];
    prices: {
        amount: number;
        currency: string;
        size: string;
    };
    promotionalMessage: string;
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
    image: {
        uri: string;
        alt: string;
    };
    ingredients: {
        icon: string;
        ingredient: string;
    }[];
    heatLevel: {
        icon: string;
        level: number;
    };
    name: string;
    status: string;
    sizes: string[];
    allergyWarnings: string[];
}
