const products = [
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
];

export default products;
