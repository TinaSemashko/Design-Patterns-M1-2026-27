import { ChicagoPizzaIngredientFactory } from "./ingredients/chicago.ingredient-factory";
import { NYPizzaIngredientFactory } from "./ingredients/ny.ingredient-factory";
import { CheesePizza, type Pizza } from "./pizze/pizza";

export abstract class PizzaStore {
	orderPizza(type: string): Pizza {
		const pizza = this.createPizza(type);

		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		return pizza;
	}

	protected abstract createPizza(type: string): Pizza;
}

export class NYPizzaStore extends PizzaStore {
	protected createPizza(type: string): Pizza {
		if (type === "cheese") {
			return new CheesePizza(
				"New York Style Cheese Pizza",
				new NYPizzaIngredientFactory(),
			);
		}
		throw new Error("Unknown pizza type");
	}
}

export class ChicagoPizzaStore extends PizzaStore {
	protected createPizza(type: string): Pizza {
		if (type === "cheese") {
			return new CheesePizza(
				"Chicago Style Cheese Pizza",
				new ChicagoPizzaIngredientFactory(),
			);
		}
		throw new Error("Unknown pizza type");
	}
}
