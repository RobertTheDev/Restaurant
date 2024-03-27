export default interface IBillingAddress {
    // Default fields
    id: string;

    // Foreign fields
    paymentMethodId: string;

    // Custom fields
    address: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
}
