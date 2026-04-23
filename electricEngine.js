import Engine from "./engineInterface.js";

export class ElectricEngine extends Engine {
  constructor(speed) {
    super(speed);
  }

  increase() {

    this.speed += 1;
  }

  decrease() {
    this.speed -= 1;
  }
}

let engine = new ElectricEngine(50);

console.log(engine.speed);

engine.increase();
console.log(engine.speed);
