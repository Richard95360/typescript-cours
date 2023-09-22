"use strict";
class Car {
    color;
    gears;
    //readonly color: string;
    //public gears: number = 4
    constructor(color, gears) {
        this.color = color;
        this.gears = gears;
        // this.color = color
        //this.gears = gears
    }
}
let ford = new Car('white', 4);
console.log(ford);
