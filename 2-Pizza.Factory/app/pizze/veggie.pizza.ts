import { BasePizza } from "./base.pizza";

export class NapoliStyleVeggiePizza extends BasePizza {
	constructor() {
		super("NapoliStyle Veggie Pizza");
	}
}

export class ChicagoStyleVeggiePizza extends BasePizza {
	constructor() {
		super("Chicago Veggie Pizza");
	}
}

export class NYStyleVeggiePizza extends BasePizza {
	constructor() {
		super("NY Style Veggie Pizza");
	}
}