import { Duck } from "@/Duck";
import { FlyNoWay } from "./fly-behaviors/fly-no-way.behavior";

export class RubberDuck extends Duck {
	constructor() {
		super(new FlyNoWay()); // default strategy for this duck
	}

	display(): string {
		return "I'm a rubber duck!";
	}
}
