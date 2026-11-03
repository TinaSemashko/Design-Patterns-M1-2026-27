import { PaypalPayment } from "./payment-methode/payment";
import { Currency, PaymentGateway } from "./payment.gateway";

export class PayPalAdapter implements PaymentGateway {
	private readonly paypal: PaypalPayment;
	private currency: Currency;

	constructor(paypal: PaypalPayment) {
		this.paypal = paypal;
		this.currency = Currency.EUR;
	}

	processPayment(amount: number): void {
		this.paypal.sendPayment(amount, this.currency);
	}
}