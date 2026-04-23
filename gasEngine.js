import Engine from "./engineInterface.js";

export class GasEngine extends Engine {
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
    console.log(`Gas Engine Started`);
  }

  stop() {
    console.log(`Gas Engine Stopted`);
  }

  engineSpeed(){
    return this.speed
  }
}
