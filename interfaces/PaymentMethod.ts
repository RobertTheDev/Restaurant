export default interface IPaymentMethod {
    // Default fields
    id: string;
    createdAt: Date;

    // Foreign fields
    customerId: string;

    // Custom fields
    cardholderName: string;
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
    type: string;
}
