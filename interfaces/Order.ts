import type IOrderItem from "./OrderItem";

export default interface IOrder {
    id: string;
    createdAt: Date;
    customerId: string;
    orderItems: IOrderItem[];
    status: string;
}
