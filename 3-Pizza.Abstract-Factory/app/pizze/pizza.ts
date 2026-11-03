import type { Cheese, Dough, Sauce } from "@/ingredients/ingredients";
import type { PizzaIngredientFactory } from "@/ingredients/pizza-ingredient.factory";

export abstract class Pizza {
	protected name: string;
	protected dough: Dough;
	protected sauce: Sauce;
	protected cheese: Cheese;

	constructor(name: string, factory: PizzaIngredientFactory) {
		this.name = name;
		this.dough = factory.createDough();
		this.sauce = factory.createSauce();
		this.cheese = factory.createCheese();
	}

	getName(): string {
		return this.name;
	}

	abstract prepare(): void;

	bake(): void {
		console.log("Bake for 25 minutes at 350");
	}

	cut(): void {
		console.log("Cutting the pizza into diagonal slices");
	}

	box(): void {
		console.log("Place pizza in official PizzaStore box");
	}
}

export class CheesePizza extends Pizza {
	prepare(): void {
		console.log(
			`Preparing ${this.name} with ${this.dough.getName()}, ${this.sauce.getName()}, and ${this.cheese.getName()}`,
		);
	}
}
