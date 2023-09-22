"use strict";
class Mother {
    name;
    eyes;
    constructor(n, e) {
        this.name = n;
        this.eyes = e;
    }
    speak() {
        console.log(`Je me presente je m'apelle ${this.name}`);
    }
}
let ric = new Mother('Ric', 2);
ric.speak();
console.log(ric);
let henri;
henri = {
    name: 'roc',
    eyes: 2,
    speak(a) {
        return a + '' + this.name;
    }
};
const talkinPerson = (a, b) => {
    return a.speak(b);
};
const result = talkinPerson(henri, ' je suis');
console.log(result);
let cyclope = {
    name: 'thor',
    eyes: 1,
    speak(a) {
        return a + '' + this.name;
    }
};
cyclope.name = 'bruce';
