class Vehicle  {
    constructor(type,model,parts,fuel){
        this.type =type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
        this.parts.quality = parts.engine * parts.power;
    }
    drive(driven){
        this.fuel -= driven;
        return this.fuel;
    }
}
let parts = {engine: 9, power: 500}; let vehicle = new Vehicle('l', 'k', parts, 840); vehicle.drive(20); console.log(vehicle.fuel);