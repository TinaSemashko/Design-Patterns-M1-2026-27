import type { FlyBehavior } from "./fly.behavior";

export class FlyRocketPowered implements FlyBehavior {
	fly(): string {
		return "Je vole avec une fusée!";
	}
}
