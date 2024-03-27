import IProduct from "./Product";

export default interface IMenu {
    id: string;
    createdAt: string;
    description: string;
    imageUrl: string;
    name: string;
    products: IProduct[];
    slug: string;
}
