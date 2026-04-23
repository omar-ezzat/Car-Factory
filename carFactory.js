import Car from "./car.js";
import { ElectricEngine } from "./electricEngine.js";
import { GasEngine } from "./gasEngine.js";
import { HybridEngine } from "./hybridEngine.js";

class CarFactory {
  static createCar(engineType) {
    let newCar = new Car();
    installEngine(newCar, engineType);
    return newCar;
  }
  static createEngine(engine) {
    switch (engine) {
      case "electric":
        return new ElectricEngine();
        break;

      case "gas":
        return new GasEngine();
        break;

      case "hybrid":
        return new HybridEngine();
        break;

      default:
        throw new Error("Choose correct Engine");
    }
  }

  static installEngine(car, engine) {
    car.setEngine(createEngine(engine));
  }
}
