import { StripePayment } from "./payment-methode/payment";
import { PaymentGateway } from "./payment.gateway";

export class StripeAdapter implements PaymentGateway {
	private readonly stripe: StripePayment;

	constructor(stripe: StripePayment) {
		this.stripe = stripe;
	}

	processPayment(amount: number): void {
		this.stripe.makePayment(Math.round(amount * 100));
	}
}