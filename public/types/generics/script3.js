"use strict";
//Type readonly
let colors1 = ['blue', 'red', 'green'];
let heros = {
    Batman: { name: "Batman", power: 10, marvel: false, dcComics: true },
    Spiderman: { name: "Spiderman", power: 30, marvel: true, dcComics: false },
    Superman: { name: "Superman", power: 80, marvel: false, dcComics: true },
};
console.log(heros);
heros.Spiderman.marvel && console.log(`${heros.Spiderman.name} est Marvel`);
let todo1 = {
    title: 'coucou',
    description: '',
    completed: true
};
let todo2 = {
    title: 'coucou',
    completed: false
};
let todo3 = {
    description: 'voila'
};
class UIElement {
    animate(x, y, easing) {
        if (easing === "ease-in")
            console.log("ease-in");
        // if(easing === "ease-out")
        //console.log("ease-out")
        if (easing === "ease-in-out")
            console.log("ease-int-out");
    }
}
let button = new UIElement();
button.animate(0, 0, "ease-in");
function clgColord(arg) {
    console.log(arg);
}
clgColord("green");
// type NonNullable
class Car1 {
    color;
    paint(color) {
        console.log(color);
    }
}
const ford1 = new Car1();
ford1.paint('Green');
//Type Parameters
function fetchUser(id, username) {
    return {
        id,
        username
    };
}
function fecthLoggedUser(...params) {
    const numberData = fetchUser(...params);
    console.log(numberData);
}
fecthLoggedUser(2, 'Jhon');
function fecthLoggedUser1(...params) {
    const numberData = fetchUser(...params);
    console.log(numberData);
    let user1 = numberData;
}
