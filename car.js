export default class Car {
  constructor() {
    this.engine ={};
  }

  setEngine(engine){
    this.engine = engine
  }

  start() {
    this.engine.start();
  }

  stop() {
    this.engine.stop();
  }

  accelerate() {
    for (let i = 0; i < 20; i++) {

      if (this.engine.engineSpeed() < 200) {
        this.engine.increase();
      }
    }
    console.log(
      `Current speed is ${this.engine.engineSpeed()} ${this.engine.unit} `,
    );
  }

  break() {
    for (let i = 0; i < 20; i++) {
      if (this.engine.engineSpeed() > 0) {
        this.engine.decrease();
      }
    }
    console.log(
      `Current speed is ${this.engine.engineSpeed()} ${this.engine.unit} `,
    );
  }

}
