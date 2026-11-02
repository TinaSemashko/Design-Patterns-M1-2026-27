import { Duck } from "@/Duck";
import { FlyNoWay } from "./fly-behaviors/fly-no-way.behavior";

export class ModelDuck extends Duck {
	constructor() {
		super(new FlyNoWay()); // default strategy for this duck
	}

	display(): string {
		return "I'm a model duck!";
	}
}
