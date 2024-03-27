import type IIMage from "./Image";
import type IProduct from "./Product";

export default interface IMenu {
    // Default fields
    id: string;
    createdAt: string;

    // Custom fields
    description: string;
    image: IIMage;
    name: string;
    products: IProduct[];
    slug: string;
}
