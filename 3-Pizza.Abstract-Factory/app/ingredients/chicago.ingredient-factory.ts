import {
	type Cheese,
	type Dough,
	MozzarellaCheese,
	PlumTomatoSauce,
	type Sauce,
	ThickCrustDough,
} from "./ingredients";
import type { PizzaIngredientFactory } from "./pizza-ingredient.factory";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
	createDough(): Dough {
		return new ThickCrustDough();
	}

	createSauce(): Sauce {
		return new PlumTomatoSauce();
	}

	createCheese(): Cheese {
		return new MozzarellaCheese();
	}
}
