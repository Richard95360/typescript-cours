
class Car {
  //readonly color: string;
  //public gears: number = 4
  constructor(readonly color:string, public gears: number){
   // this.color = color
    //this.gears = gears
  }
 
} 

let ford = new Car('white', 4)


console.log(ford);