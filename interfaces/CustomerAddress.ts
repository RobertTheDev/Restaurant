export default interface ICustomerAddress {
    // Default fields
    id: string;
    createdAt: Date;

    // Foreign fields
    customerId: string;

    // Custom fields
    address: string;
    city: string;
    name: string | null;
    region: string | null;
    postalCode: string;
    country: string;
}
