import Engine from "./engineInterface.js";
import { ElectricEngine } from "./electricEngine.js";
import { GasEngine } from "./gasEngine.js";


class HybridEngine{
    constructor(speed){
        super(speed)
        this.electric = new ElectricEngine()
        this.gas = new GasEngine()
    }

    checkEngine(speed){
        if(this.speed >50){
            console.log(`Gas Engine is working`);
        }else{
            console.log(`Electric Engine is working`);
        }
    }

    increase(speed){
        this.speed +=1
        this.checkEngine(this.speed)
    }
    
    decrease(speed){
        this.speed -=1
        this.checkEngine(this.speed)
    }

}