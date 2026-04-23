// import Engine from "./engineInterface.js";
import { ElectricEngine } from "./electricEngine.js";
import { GasEngine } from "./gasEngine.js";

class HybridEngine {
  constructor(speed) {
    if ((speed) => 50) {
      this.electric = new ElectricEngine(50);
      this.gas = new GasEngine(speed);
      this.selectedEngine = this.gas;
    } else {
      this.electric = new ElectricEngine(speed);
      this.gas = new GasEngine(50);
      this.selectedEngine = this.electric;
    }
  }

  checkEngine(newSpeed) {
    if (newSpeed > 50 && this.selectedEngine === this.electric) {
      this.selectedEngine = this.gas;
      console.log(`Gas Engine is working`);
    }

    if (newSpeed < 50 && this.selectedEngine === this.gas) {
      this.selectedEngine = this.electric;

      console.log(`Electric Engine is working`);
    }
  }

  increase() {
    let newSpeed = this.selectedEngine.speed + 1;
    this.checkEngine(newSpeed);
    this.selectedEngine.increase();
  }

  decrease() {
    let newSpeed = this.selectedEngine.speed - 1;
    this.checkEngine(newSpeed);
    this.selectedEngine.decrease();
  }

  start() {
    this.selectedEngine.start();
  }

  stop() {
    this.selectedEngine.stop;
  }

  EngineSpeed() {
    return this.selectedEngine.speed;
  }
}
