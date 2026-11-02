import { Duck } from "@/Duck";
import { FlyWithWings } from "@/fly-behaviors/fly-with-wings.behavior";

export class MallardDuck extends Duck {
	constructor() {
		super(new FlyWithWings()); // default strategy for this duck
	}

	display(): string {
		return "I'm a mallard duck!";
	}
}
