import type IOrderItem from "../interfaces/OrderItem";

const orderItemsData: IOrderItem[] = [
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
];

export default orderItemsData;
