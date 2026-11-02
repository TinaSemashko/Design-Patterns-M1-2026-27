import { BasePizza } from "./base.pizza";

export class NapoliStyleMargheritaPizza extends BasePizza {
	constructor() {
		super("NapoliStyle Margherita Pizza");
	}
}

export class ChicagoStyleMargheritaPizza extends BasePizza {
	constructor() {
		super("Chicago Margherita Pizza");
	}
}

export class NYStyleMargheritaPizza extends BasePizza {
	constructor() {
		super("NY Style Margherita Pizza");
	}
}