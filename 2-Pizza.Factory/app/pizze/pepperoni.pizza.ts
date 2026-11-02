import { BasePizza } from "./base.pizza";

export class NapoliStylePepperoniPizza extends BasePizza {
	constructor() {
		super("NapoliStyle Pepperoni Pizza");
	}
}

export class ChicagoStylePepperoniPizza extends BasePizza {
    constructor() {
      super("Chicago Pepperoni Pizza");
    }
  }

export class NYStylePepperoniPizza extends BasePizza {
	constructor() {
		super("NY Style Pepperoni Pizza");
	}
}