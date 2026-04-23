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

  start() {
    console.log(`Electric Engine Started`);
  }

  stop() {
    console.log(`Electric Engine Stopted`);
  }

  engineSpeed() {
    return this.speed;
  }
}
