const basketData = [
    {
        id: "1",
        createdAt: new Date(),
        customerId: "22",
        currency: "GBP",
        totalCost: 64.99,
        totalItems: 23,
        products: [
            {
                id: "1",
                createdAt: new Date(),
                productId: "ABC123",
                basketId: "1",
                quantity: 2,
                product: {
                    name: "Example Product 1",
                    price: 10.99,
                    subtotal: 21.98
                }
            }
        ]
    }
];

export default basketData;
