export default interface IOrderItem {
    id: string;
    createdAt: Date;
    orderId: string;
    productId: string;
    quantity: number;
}
