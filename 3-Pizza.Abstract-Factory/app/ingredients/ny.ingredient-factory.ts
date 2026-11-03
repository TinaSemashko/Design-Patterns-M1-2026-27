import {
	type Cheese,
	type Dough,
	MarinaraSauce,
	ReggianoCheese,
	type Sauce,
	ThinCrustDough,
} from "./ingredients";
import type { PizzaIngredientFactory } from "./pizza-ingredient.factory";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
	createDough(): Dough {
		return new ThinCrustDough();
	}

	createSauce(): Sauce {
		return new MarinaraSauce();
	}

	createCheese(): Cheese {
		return new ReggianoCheese();
	}
}
