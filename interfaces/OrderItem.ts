import type IProduct from "./Product";

export default interface IOrderItem {
    // Default fields
    id: string;
    createdAt: Date;

    // Foreign fields
    orderId: string;
    productId: string;

    // Custom fields
    product: IProduct;
    quantity: number;
}
