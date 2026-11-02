import { afterEach, describe, expect, it, vi } from "vitest";
import {
	ChicagoStyleMargheritaPizza,
	NapoliStyleMargheritaPizza,
} from "@/pizze/margherita.pizza";
import {
	ChicagoStylePepperoniPizza,
	NapoliStylePepperoniPizza,
} from "@/pizze/pepperoni.pizza";
import {
	ChicagoStyleVeggiePizza,
	NapoliStyleVeggiePizza,
} from "@/pizze/veggie.pizza";
import { ChicagoPizzaStore } from "@/stores/chicago.pizza-store";
import { NapoliPizzaStore } from "@/stores/napoli.pizza-store";

describe("Pizza Factory Method", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it.each([
		{
			store: new NapoliPizzaStore(),
			name: "NapoliStyle Margherita Pizza",
			type: "margherita",
			expected: NapoliStyleMargheritaPizza,
		},
		{
			store: new NapoliPizzaStore(),
			name: "NapoliStyle Pepperoni Pizza",
			type: "pepperoni",
			expected: NapoliStylePepperoniPizza,
		},
		{
			store: new NapoliPizzaStore(),
			name: "NapoliStyle Veggie Pizza",
			type: "veggie",
			expected: NapoliStyleVeggiePizza,
		},
		{
			store: new ChicagoPizzaStore(),
			name: "Chicago Margherita Pizza",
			type: "margherita",
			expected: ChicagoStyleMargheritaPizza,
		},
		{
			store: new ChicagoPizzaStore(),
			name: "Chicago Pepperoni Pizza",
			type: "pepperoni",
			expected: ChicagoStylePepperoniPizza,
		},
		{
			store: new ChicagoPizzaStore(),
			name: "Chicago Veggie Pizza",
			type: "veggie",
			expected: ChicagoStyleVeggiePizza,
		},
	])(
		"$store.constructor.name should create $type as $expected.name",
		({ store, name, type, expected }) => {
			const pizza = store.orderPizza(type);
			expect(pizza).toBeInstanceOf(expected);
			expect(pizza?.getName()).toBe(name);
		},
	);

	it("should return null for an unknown pizza type", () => {
		// Silence the expected console.error in test output
		vi.spyOn(console, "error").mockImplementation(() => {});

		const store = new ChicagoPizzaStore();
		expect(store.orderPizza("hawaii")).toBeNull();
	});

	it("should prepare, bake, cut and box the pizza", () => {
		const pizza = NapoliStyleMargheritaPizza.prototype;
		const prepare = vi.spyOn(pizza, "prepare");
		const bake = vi.spyOn(pizza, "bake");
		const cut = vi.spyOn(pizza, "cut");
		const box = vi.spyOn(pizza, "box");

		new NapoliPizzaStore().orderPizza("margherita");

		expect(prepare).toHaveBeenCalled();
		expect(bake).toHaveBeenCalled();
		expect(cut).toHaveBeenCalled();
		expect(box).toHaveBeenCalled();
	});
});