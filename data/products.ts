const menuData = [
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
            uri: "",
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
        name: "Pizzaaa",
        allergyWarnings: [{ icon: "", value: "" }]
    }
];

export default menuData;
