import type { Cheese, Dough, Sauce } from "./ingredients";

export interface PizzaIngredientFactory {
	createDough(): Dough;
	createSauce(): Sauce;
	createCheese(): Cheese;
}
