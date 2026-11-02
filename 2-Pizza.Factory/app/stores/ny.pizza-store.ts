import { PizzaStore } from "@/pizza.store";
import { NYStyleMargheritaPizza } from "@/pizze/margherita.pizza";
import { NYStylePepperoniPizza } from "@/pizze/pepperoni.pizza";
import type { Pizza } from "@/pizze/pizza";
import { NYStyleVeggiePizza } from "@/pizze/veggie.pizza";

export class NYPizzaStore extends PizzaStore {
	// Menu: pizza type → function that creates it
	private readonly menu: Record<string, () => Pizza> = {
		margherita: () => new NYStyleMargheritaPizza(),
		pepperoni: () => new NYStylePepperoniPizza(),
		veggie: () => new NYStyleVeggiePizza(),
	};

	createPizza(type: string): Pizza | null {
		const create = this.menu[type];
		return create ? create() : null;
	}
}
