"use strict";
class Mother {
    name;
    hair;
    eyes;
    /*private name:string;
    private hair:string;
    private eyes:number*/
    constructor(name, hair, eyes) {
        this.name = name;
        this.hair = hair;
        this.eyes = eyes;
        /*this.name = n,
        this.hair = h,
        this.eyes = e*/
    }
    getName() {
        return this.name;
    }
    getHair() {
        return this.hair;
    }
    setHair(newColor) {
        this.hair = newColor;
    }
    speak() {
        console.log(`je suis ${this.name} j'ai les cheveux ${this.hair}`);
    }
}
class Children extends Mother {
    speakUs() {
        console.log(`I am ${this.getName} and i have ${this.setHair} hair`);
    }
    speakFr() {
    }
    getData() {
        return this.eyes;
    }
}
class Ramdom {
    name;
    hair;
    eyes;
    constructor(n, h, e) {
        this.name = n,
            this.hair = h,
            this.eyes = e;
    }
}
const person1 = new Mother("Ric", "Brun", 2);
person1.setHair("red");
console.log(person1.getHair());
console.log(person1);
const person2 = new Children('roc', 'brown', 2);
console.log(person2);
const person3 = new Ramdom("tom", "marron", 2);
