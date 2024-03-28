import type IMenu from "../interfaces/Menu";

const menusData: IMenu[] = [
    {
        id: "1",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Various add-ons to complement your meal.",
        image: {
            id: "1",
            createdAt: new Date(),
            alt: "",
            uri: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        name: "Add-ons",
        products: [],
        slug: "add-ons"
    },
    {
        id: "2",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Delicious appetizers to start your meal.",
        image: {
            uri: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "1",
            createdAt: new Date(),
            alt: ""
        },
        name: "Antipastis",
        products: [],
        slug: "antipastis"
    },

    {
        id: "4",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Freshly baked bread varieties.",
        image: {
            uri: "https://images.unsplash.com/photo-1611871679274-5242ed4c3cd0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "1",
            createdAt: new Date(),
            alt: ""
        },
        name: "Breads",
        products: [],
        slug: "breads"
    },

    {
        id: "6",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Indulgent desserts to satisfy your sweet tooth.",
        image: {
            uri: "https://images.unsplash.com/photo-1641349268827-05362f5e726c?q=80&w=2732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "1",
            createdAt: new Date(),
            alt: ""
        },
        name: "Desserts",
        products: [],
        slug: "desserts"
    },
    {
        id: "7",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Freshly caught fish dishes.",
        image: {
            uri: "https://images.unsplash.com/photo-1625938393850-10f1f23de467?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "1",
            createdAt: new Date(),
            alt: ""
        },
        name: "Fish",
        products: [],
        slug: "fish"
    },
    {
        id: "8",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Grilled sandwiches filled with flavorful ingredients.",
        image: {
            uri: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "1",
            createdAt: new Date(),
            alt: ""
        },
        name: "Paninis",
        products: [],
        slug: "paninis"
    },
    {
        id: "9",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Classic Italian pasta dishes.",
        image: {
            uri: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=2792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "1",
            createdAt: new Date(),
            alt: ""
        },
        name: "Pastas",
        products: [],
        slug: "pastas"
    },
    {
        id: "10",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Authentic Italian pizzas with various toppings.",
        image: {
            uri: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "1",
            createdAt: new Date(),
            alt: ""
        },
        name: "Pizzas",
        products: [
            {
                id: "1",
                createdAt: new Date(),
                quantity: 23,
                category: "Pizzas",
                menuItemId: "",
                description: "This is the description",
                tags: [
                    {
                        value: "Extra Cheese",
                        icon: ""
                    }
                ],
                reviews: [
                    {
                        userId: "user123",
                        rating: 4.5,
                        comment: "Great pizza, loved the flavor!",
                        date: new Date("2024-03-25")
                    }
                ],
                totalReviews: 33,
                totalScore: 44,
                options: [
                    {
                        name: "Extra Cheese",
                        price: 1.99
                    },
                    {
                        name: "Extra Toppings",
                        price: 2.49
                    }
                ],
                variants: [],
                prices: {
                    amount: "12.99",
                    currency: "",
                    size: "L"
                },
                promotionalMessage: "",
                availabilityStatus: {},
                nutrition: {
                    calories: 300,
                    fat: 15,
                    protein: 10,
                    carbohydrates: 30
                },
                discount: {
                    percentage: "20%",
                    value: 0.2
                },
                image: {
                    uri: require("../assets/pizzas/texmex.jpg"),
                    alt: ""
                },
                ingredients: [
                    {
                        icon: "",
                        ingredient: ""
                    }
                ],
                heatLevel: {
                    icon: "",
                    level: 3
                },
                name: "TexMex Pizza",
                //         status: "Deal",
                //         sizes: ["S", "M", "X"]
                allergyWarnings: [{ icon: "", value: "" }]
            },
            /// PRODUCT 2
            {
                id: "2",
                createdAt: new Date(),
                quantity: 23,
                category: "Pizzas",
                menuItemId: "",
                description: "This is the description",
                tags: [
                    {
                        value: "Extra Cheese",
                        icon: ""
                    }
                ],
                reviews: [
                    {
                        userId: "user123",
                        rating: 4.5,
                        comment: "Great pizza, loved the flavor!",
                        date: new Date("2024-03-25")
                    }
                ],
                totalReviews: 33,
                totalScore: 44,
                options: [
                    {
                        name: "Extra Cheese",
                        price: 1.99
                    },
                    {
                        name: "Extra Toppings",
                        price: 2.49
                    }
                ],
                variants: [],
                prices: {
                    amount: "12.99",
                    currency: "",
                    size: "L"
                },
                promotionalMessage: "",
                availabilityStatus: {},
                nutrition: {
                    calories: 300,
                    fat: 15,
                    protein: 10,
                    carbohydrates: 30
                },
                discount: {
                    percentage: "20%",
                    value: 0.2
                },
                image: {
                    uri: require("../assets/pizzas/pepperoni.jpg"),
                    alt: ""
                },
                ingredients: [
                    {
                        icon: "",
                        ingredient: ""
                    }
                ],
                heatLevel: {
                    icon: "",
                    level: 3
                },
                name: "TexMex Pizza",
                //         status: "Deal",
                //         sizes: ["S", "M", "X"]
                allergyWarnings: [{ icon: "", value: "" }]
            },
            {
                id: "3",
                createdAt: new Date(),
                quantity: 23,
                category: "Pizzas",
                menuItemId: "",
                description: "This is the description",
                tags: [
                    {
                        value: "Extra Cheese",
                        icon: ""
                    }
                ],
                reviews: [
                    {
                        userId: "user123",
                        rating: 4.5,
                        comment: "Great pizza, loved the flavor!",
                        date: new Date("2024-03-25")
                    }
                ],
                totalReviews: 33,
                totalScore: 44,
                options: [
                    {
                        name: "Extra Cheese",
                        price: 1.99
                    },
                    {
                        name: "Extra Toppings",
                        price: 2.49
                    }
                ],
                variants: [],
                prices: {
                    amount: "12.99",
                    currency: "",
                    size: "L"
                },
                promotionalMessage: "",
                availabilityStatus: {},
                nutrition: {
                    calories: 300,
                    fat: 15,
                    protein: 10,
                    carbohydrates: 30
                },
                discount: {
                    percentage: "20%",
                    value: 0.2
                },
                image: {
                    uri: require("../assets/pizzas/margarita.jpg"),
                    alt: ""
                },
                ingredients: [
                    {
                        icon: "",
                        ingredient: ""
                    }
                ],
                heatLevel: {
                    icon: "",
                    level: 3
                },
                name: "TexMex Pizza",
                //         status: "Deal",
                //         sizes: ["S", "M", "X"]
                allergyWarnings: [{ icon: "", value: "" }]
            },
            {
                id: "4",
                createdAt: new Date(),
                quantity: 23,
                category: "Pizzas",
                menuItemId: "",
                description: "This is the description",
                tags: [
                    {
                        value: "Extra Cheese",
                        icon: ""
                    }
                ],
                reviews: [
                    {
                        userId: "user123",
                        rating: 4.5,
                        comment: "Great pizza, loved the flavor!",
                        date: new Date("2024-03-25")
                    }
                ],
                totalReviews: 33,
                totalScore: 44,
                options: [
                    {
                        name: "Extra Cheese",
                        price: 1.99
                    },
                    {
                        name: "Extra Toppings",
                        price: 2.49
                    }
                ],
                variants: [],
                prices: {
                    amount: "12.99",
                    currency: "",
                    size: "L"
                },
                promotionalMessage: "",
                availabilityStatus: {},
                nutrition: {
                    calories: 300,
                    fat: 15,
                    protein: 10,
                    carbohydrates: 30
                },
                discount: {
                    percentage: "20%",
                    value: 0.2
                },
                image: {
                    uri: require("../assets/pizzas/basilpizza.jpg"),
                    alt: ""
                },
                ingredients: [
                    {
                        icon: "",
                        ingredient: ""
                    }
                ],
                heatLevel: {
                    icon: "",
                    level: 3
                },
                name: "TexMex Pizza",
                //         status: "Deal",
                //         sizes: ["S", "M", "X"]
                allergyWarnings: [{ icon: "", value: "" }]
            },
            {
                id: "5",
                createdAt: new Date(),
                quantity: 23,
                category: "Pizzas",
                menuItemId: "",
                description: "This is the description",
                tags: [
                    {
                        value: "Extra Cheese",
                        icon: ""
                    }
                ],
                reviews: [
                    {
                        userId: "user123",
                        rating: 4.5,
                        comment: "Great pizza, loved the flavor!",
                        date: new Date("2024-03-25")
                    }
                ],
                totalReviews: 33,
                totalScore: 44,
                options: [
                    {
                        name: "Extra Cheese",
                        price: 1.99
                    },
                    {
                        name: "Extra Toppings",
                        price: 2.49
                    }
                ],
                variants: [],
                prices: {
                    amount: "12.99",
                    currency: "",
                    size: "L"
                },
                promotionalMessage: "",
                availabilityStatus: {},
                nutrition: {
                    calories: 300,
                    fat: 15,
                    protein: 10,
                    carbohydrates: 30
                },
                discount: {
                    percentage: "20%",
                    value: 0.2
                },
                image: {
                    uri: require("../assets/pizzas/Neapolitan.jpg"),
                    alt: ""
                },
                ingredients: [
                    {
                        icon: "",
                        ingredient: ""
                    }
                ],
                heatLevel: {
                    icon: "",
                    level: 3
                },
                name: "TexMex Pizza",
                //         status: "Deal",
                //         sizes: ["S", "M", "X"]
                allergyWarnings: [{ icon: "", value: "" }]
            }
        ],
        slug: "pizzas"
    },
    {
        id: "11",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Fresh and healthy salad options.",
        image: {
            uri: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=2878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "1",
            createdAt: new Date(),
            alt: ""
        },
        name: "Salads",
        products: [],
        slug: "salads"
    },
    {
        id: "12",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Warm and comforting soups.",
        image: {
            uri: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "1",
            createdAt: new Date(),
            alt: ""
        },
        name: "Soups",
        products: [],
        slug: "soups"
    },

    {
        id: "14",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Satisfying vegetarian options.",
        image: {
            uri: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "1",
            createdAt: new Date(),
            alt: ""
        },
        name: "Vegetarian",
        products: [],
        slug: "vegetarian"
    },
    {
        id: "15",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Refreshing beverages to accompany your meal.",
        image: {
            uri: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2837&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: "1",
            createdAt: new Date(),
            alt: ""
        },
        name: "Beverages",
        products: [],
        slug: "beverages"
    }
];

export default menusData;
