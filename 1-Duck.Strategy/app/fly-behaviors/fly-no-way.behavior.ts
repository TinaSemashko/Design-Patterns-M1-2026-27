import type { FlyBehavior } from "./fly.behavior";

export class FlyNoWay implements FlyBehavior {
	fly(): string {
		return "Je ne peux pas voler";
	}
}
