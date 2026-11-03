
import { PaymentGateway } from "./payment.gateway";

export class PaymentService {
  private gateway: PaymentGateway;

  constructor(gateway: PaymentGateway) {
    this.gateway = gateway;
  }

  pay(amount: number): void {
    this.gateway.processPayment(amount);
  }
}

