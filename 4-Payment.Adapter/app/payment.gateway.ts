export interface PaymentGateway {
	// Amount in euros
	processPayment(amount: number): void;
}

export enum Currency {
	EUR = "EUR",
}