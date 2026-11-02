import type { PizzaStore } from "./pizza.store";
import { ChicagoPizzaStore } from "./stores/chicago.pizza-store";
import { NapoliPizzaStore } from "./stores/napoli.pizza-store";

function pizzaOrder(store: PizzaStore, type: string) {
	return store.orderPizza(type);
}

function main() {
	const napoliPizzaStore = new NapoliPizzaStore();
	const pizza = pizzaOrder(napoliPizzaStore, "margherita");
	console.log(pizza?.getName());
	const pizza2 = pizzaOrder(napoliPizzaStore, "pepperoni");
	console.log(pizza2?.getName());
	const pizza3 = pizzaOrder(new ChicagoPizzaStore(), "veggie");
	console.log(pizza3?.getName());
}
main();
