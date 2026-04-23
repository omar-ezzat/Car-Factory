export default class Engine{
    constructor(speed){
        if(this.constructor === Engine){
            throw new Error("Can NOT create an Object from Interface")
        }
        this.speed = speed
        this.unit = "km/h"
    }

    increase(){
        throw new Error("implement the increase() function")
    }

    decrease(){
        throw new Error("implement the decrease() function") 
    }
}