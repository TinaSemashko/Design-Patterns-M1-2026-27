import { FlyRocketPowered } from "@/fly-behaviors/fly-rocket-powered.behavior";
import { MallardDuck } from "@/MallardDuck";
import { ModelDuck } from "@/ModelDuck";
import { RubberDuck } from "@/RubberDuck";

function main() {
	console.log("--- Default behaviors ---");
	const ducks = [new MallardDuck(), new RubberDuck(), new ModelDuck()];

	for (const duck of ducks) {
		console.log(duck.display(), "→", duck.performFly());
	}

	console.log("--- Runtime behavior change ---");
	const model = new ModelDuck();
	console.log(model.display(), "→", model.performFly());

	model.setFlyBehavior(new FlyRocketPowered());
	console.log(model.display(), "→", model.performFly());
}

main();