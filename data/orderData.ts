import type IOrder from "../interfaces/Order";

const ordersData: IOrder[] = [
    {
        id: "1",
        createdAt: new Date(),
        customerId: "22",
        status: "Basket",
        orderItems: [
            {
                id: "1",
                createdAt: new Date(),
                orderId: "22",
                productId: "2",
                quantity: 2
            },
            {
                id: "2",
                createdAt: new Date(),
                orderId: "22",
                productId: "4",
                quantity: 5
            }
        ]
    }
];

export default ordersData;
