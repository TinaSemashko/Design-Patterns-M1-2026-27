import { PaymentService } from "./payment.service";
import type { PaymentGateway } from "./payment.gateway";
import { StripeAdapter } from "./adapter.stripe";
import { PaypalPayment, StripePayment } from "./payment-methode/payment";
import { PayPalAdapter } from "./adapter.paypal";


function main() {
  console.log("Payment Adapter Example");

  const stripeGateway: PaymentGateway = new StripeAdapter(new StripePayment());
  const stripeService = new PaymentService(stripeGateway);
  stripeService.pay(50);
  const paypalGateway: PaymentGateway = new PayPalAdapter(new PaypalPayment());
  const paypalService = new PaymentService(paypalGateway);
  paypalService.pay(50);
}
main();
