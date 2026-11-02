import { PizzaStore } from "@/pizza.store";
import { ChicagoStyleMargheritaPizza } from "@/pizze/margherita.pizza";
import { ChicagoStylePepperoniPizza } from "@/pizze/pepperoni.pizza";
import type { Pizza } from "@/pizze/pizza";
import { ChicagoStyleVeggiePizza } from "@/pizze/veggie.pizza";

export class ChicagoPizzaStore extends PizzaStore {
	// Menu: pizza type → function that creates it
	private readonly menu: Record<string, () => Pizza> = {
		margherita: () => new ChicagoStyleMargheritaPizza(),
		pepperoni: () => new ChicagoStylePepperoniPizza(),
		veggie: () => new ChicagoStyleVeggiePizza(),
	};

	createPizza(type: string): Pizza | null {
		const create = this.menu[type];
		return create ? create() : null;
	}
}
