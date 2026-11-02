import type { FlyBehavior } from "@/fly-behaviors/fly.behavior";

export abstract class Duck {
	protected flyBehavior: FlyBehavior;

	constructor(flyBehavior: FlyBehavior) {
		this.flyBehavior = flyBehavior;
	}

	performFly(): string {
		return this.flyBehavior.fly();
	}

	setFlyBehavior(flyBehavior: FlyBehavior): void {
		this.flyBehavior = flyBehavior;
	}

	swim(): string {
		return "Swimming!";
	}

	quack(): string {
		return "Quack!";
	}

	// Each duck type must provide its own display
	abstract display(): string;
}
