"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /* talk(){
         return `je m'appelle ${this.name}`
     }*/
    talk() {
        return `je m'apelle ${this.name}`;
    }
}
class Alien {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    telepathy() {
        return `je m'apelle ${this.name}. Je suis un ado de ${this.age} ans`;
    }
}
const form = document.getElementById('signupForm');
const firstname = document.getElementById('firstname');
const age = document.getElementById('age');
const species = document.getElementById('species');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let humanUser;
    if (species.value === 'human') {
        humanUser = new Person(firstname.value, +age.value);
        console.log(humanUser, humanUser.talk());
    }
    else {
        let alienUser;
        alienUser = new Alien(firstname.value, +age.value);
        console.log(alienUser, alienUser.telepathy());
    }
});
