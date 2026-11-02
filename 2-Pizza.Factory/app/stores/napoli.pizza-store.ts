import { PizzaStore } from "@/pizza.store";
import { NapoliStyleMargheritaPizza } from "@/pizze/margherita.pizza";
import { NapoliStylePepperoniPizza } from "@/pizze/pepperoni.pizza";
import type { Pizza } from "@/pizze/pizza";
import { NapoliStyleVeggiePizza } from "@/pizze/veggie.pizza";

export class NapoliPizzaStore extends PizzaStore {
	// Menu: pizza type → function that creates it
	private readonly menu: Record<string, () => Pizza> = {
		margherita: () => new NapoliStyleMargheritaPizza(),
		pepperoni: () => new NapoliStylePepperoniPizza(),
		veggie: () => new NapoliStyleVeggiePizza(),
	};

	createPizza(type: string): Pizza | null {
		const create = this.menu[type];
		return create ? create() : null;
	}
}
