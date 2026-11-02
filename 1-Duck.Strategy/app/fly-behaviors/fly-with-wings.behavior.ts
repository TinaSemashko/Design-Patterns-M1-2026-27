import type { FlyBehavior } from "./fly.behavior";

export class FlyWithWings implements FlyBehavior {
	fly(): string {
		return "Je vole avec mes ailes!";
	}
}
