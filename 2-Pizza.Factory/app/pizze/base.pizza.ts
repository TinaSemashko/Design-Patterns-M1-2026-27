import type { Pizza } from "./pizza";

export abstract class BasePizza implements Pizza {
	protected readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

	getName(): string {
		return this.name;
	}

	prepare(): void {
		console.log(`Preparing ${this.name}`);
	}

	bake(): void {
		console.log(`Baking ${this.name}`);
	}

	cut(): void {
		console.log(`Cutting ${this.name}`);
	}

	box(): void {
		console.log(`Boxing ${this.name}`);
	}
}
