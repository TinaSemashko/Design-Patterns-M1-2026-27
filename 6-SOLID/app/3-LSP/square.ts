interface Shape {
  getArea(): number;
}



/**
 * Rectangle représente une forme dont la largeur et la hauteur
 * sont indépendantes.
 */
class Rectangle implements Shape {
  private width: number;
  private height: number;

constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}


class Square implements Shape {

  private side: number;

  constructor(side: number) {
    this.side = side;
  }

  getArea(): number {
    return this.side * this.side;
  }
}

/**
 * Le Liskov Substitution Principle dit que :
 *
 * "Une instance d'une classe dérivée doit pouvoir
 * être utilisée partout où sa classe mère est attendue,
 * sans modifier le comportement du programme."
 *

 */

function draw(shape: Shape) {
  console.log(`Area: ${shape.getArea()}`);
}

const myRect = new Rectangle(10, 20);
draw(myRect); // Area: 200

const mySquare = new Square(10);
draw(mySquare); // Area: 100 

