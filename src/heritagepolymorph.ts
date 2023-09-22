class Mother {
   /*private name:string;
   private hair:string;
   private eyes:number*/
    constructor(private name:string,private hair:string,protected eyes:number){
        /*this.name = n,
        this.hair = h,
        this.eyes = e*/
    }
    getName() {
     return  this.name
    }
    getHair(){
        return this.hair
    }
    setHair(newColor:string) {
        this.hair = newColor
    }
 private speak(){
    console.log(`je suis ${this.name} j'ai les cheveux ${this.hair}`)
 }
}

class Children extends Mother{
    speakUs(){
        console.log(`I am ${this.getName} and i have ${this.setHair} hair`)
     }
    speakFr(){
     
     }
     getData(){
       return this.eyes
     }
}

class Ramdom {
    name:string;
    hair:string;
    eyes:number
    constructor(n:string,h:string,e:number){
        this.name = n,
        this.hair = h,
        this.eyes = e
    } 
} 

const person1 = new Mother("Ric","Brun", 2);
person1.setHair("red")
console.log(person1.getHair())
console.log(person1)
const person2:Mother = new Children('roc','brown',2)
console.log(person2)
const person3 = new Ramdom("tom","marron",2)



