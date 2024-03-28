import type IOrderItem from "./OrderItem";

export default interface IOrder {
    // Default fields
    id: string;
    createdAt: Date;

    // Foreign fields
    customerId: string;

    // Custom fields
    orderItems: IOrderItem[];
    quantity: number;
    status: string;
}
