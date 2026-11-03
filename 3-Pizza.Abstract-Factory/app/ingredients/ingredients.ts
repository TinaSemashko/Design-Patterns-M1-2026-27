export interface Dough {
	readonly kind: "dough";
	getName(): string;
}

export interface Sauce {
	readonly kind: "sauce";
	getName(): string;
}

export interface Cheese {
	readonly kind: "cheese";
	getName(): string;
}

export class ThinCrustDough implements Dough {
	readonly kind = "dough" as const;
	getName(): string {
		return "Thin Crust Dough";
	}
}

export class MarinaraSauce implements Sauce {
	readonly kind = "sauce" as const;
	getName(): string {
		return "Marinara Sauce";
	}
}

export class ReggianoCheese implements Cheese {
	readonly kind = "cheese" as const;
	getName(): string {
		return "Reggiano Cheese";
	}
}

export class ThickCrustDough implements Dough {
	readonly kind = "dough" as const;
	getName(): string {
		return "Thick Crust Dough";
	}
}

export class PlumTomatoSauce implements Sauce {
	readonly kind = "sauce" as const;
	getName(): string {
		return "Plum Tomato Sauce";
	}
}

export class MozzarellaCheese implements Cheese {
	readonly kind = "cheese" as const;
	getName(): string {
		return "Mozzarella Cheese";
	}
}
