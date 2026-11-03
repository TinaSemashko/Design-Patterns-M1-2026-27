import { ChicagoPizzaStore, NYPizzaStore } from "./pizza.store";

function main() {
	const myStore = new NYPizzaStore();
	const chicagoStore = new ChicagoPizzaStore();

	const pizza1 = myStore.orderPizza("cheese");
	console.log(`Ordered a ${pizza1.getName()}\n`);

	const pizza2 = chicagoStore.orderPizza("cheese");
	console.log(`Ordered a ${pizza2.getName()}\n`);
}
main();
