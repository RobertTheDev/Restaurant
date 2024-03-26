const paymentMethods = [
    {
        id: "123",
        createdAt: new Date(),
        customerId: "789",
        type: "credit_card",
        cardNumber: "**** **** **** 1234",
        expiryDate: "12/25",
        billingAddress: {
            addressId: "1",
            createdAt: new Date(),
            street: "456 Maple Ave",
            city: "Anycity",
            state: "CA",
            postal_code: "54321",
            country: "USA"
        }
    }
];

export default paymentMethods;
