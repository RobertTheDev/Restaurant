import type IAllergy from "./Allergy";
import type ICustomerAddress from "./CustomerAddress";
import type IPaymentMethod from "./PaymentMethod";

export default interface ICustomer {
    // Default fields
    id: string;
    createdAt: Date;

    // Foreign fields
    defaultPaymentMethodId: string;

    // Custom fields
    firstName: string;
    lastName: string;
    allergies: IAllergy[];
    defaultCurrency: string;
    paymentMethods: IPaymentMethod[];
    address: ICustomerAddress | null;
    email: string;
    phoneNumber: string;
    password: string;
}
