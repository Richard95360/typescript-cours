"use strict";
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("je marche");
    }
}
class Chat extends Animal {
    updateName(name) {
        this.name = name;
    }
}
let chat = new Chat("Schiamio");
chat.walk();
chat.updateName('Miaou');
console.log(chat);
