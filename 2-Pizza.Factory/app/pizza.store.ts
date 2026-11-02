import type { Pizza } from "./pizze/pizza";

export abstract class PizzaStore {
	protected abstract createPizza(type: string): Pizza | null;

	orderPizza(type: string): Pizza | null {
		const pizza = this.createPizza(type);

		if (!pizza) {
			console.error("Error: invalid pizza configuration");
			return null;
		}

		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		return pizza;
	}
}
