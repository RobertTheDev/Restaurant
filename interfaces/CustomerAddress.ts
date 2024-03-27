export default interface ICustomerAddress {
    // Default fields
    id: string;
    createdAt: Date;

    // Foreign fields
    customerId: string;

    // Custom fields
    address: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
}
