"use strict";
class Invoice {
    client;
    product;
    price;
    constructor(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
}
const invoice1 = new Invoice("ric", "bic", 25);
const invoice2 = { client: "nord", product: "pc", price: 55 };
console.log(invoice2);
var App;
(function (App) {
    class PersonM {
        name;
        age;
        constructor(n, a) {
            this.name = n;
            this.age = a;
        }
    }
    App.PersonM = PersonM;
})(App || (App = {}));
const divColors = document.getElementById('colors');
let colors = function (arg1, ...restOfColors) {
    console.log(restOfColors);
    const h1 = document.createElement('H1');
    h1.innerHTML = `Titre ${arg1}`;
    divColors.appendChild(h1);
    const ul = document.createElement('ul');
    for (let i in restOfColors) {
        let li = document.createElement('li');
        li.innerHTML = restOfColors[i];
        ul.appendChild(li);
    }
    divColors.appendChild(ul);
};
colors("List 1", "green", "red", "orange");
colors("List 2", "blue", "black", "pink");
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
let buildNameFun = buildName;
function sum(sum1, ...restSum) {
    return sum1 + restSum;
}
buildNameFun = sum;
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
let anyDataArray = [];
anyDataArray = [1, "2222", true, { name: 'hello' }];
console.log(anyDataArray);
let userInfos = {
    name: 'ruc',
    pseudo: 123456
};
console.log(userInfos);
function gift(age, sum) {
    const numberAge = age + 3;
    sum(numberAge.toString());
}
gift(40, (num) => {
    console.log(num);
});
var Level;
(function (Level) {
    Level[Level["ADMIN"] = 0] = "ADMIN";
    Level[Level["MODERATOR"] = 1] = "MODERATOR";
    Level[Level["SUPPORT"] = 2] = "SUPPORT";
    Level[Level["USER_READ_ONLY"] = 3] = "USER_READ_ONLY";
})(Level || (Level = {}));
const user = {
    pseudo: 'Batman',
    level: Level.SUPPORT
};
if (user.level === Level.SUPPORT)
    console.log(`Bienvenue ${user.pseudo} Vous travailler au service support
  votre level est ${user.level}`);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
let colorName = Color[6];
let c = Color.Green;
console.log(colorName);
function giftOne(num) {
    return num + 3;
}
function displayClg(arg) {
    return arg;
}
let age;
age = giftOne;
console.log('age 1', age(20));
age = displayClg;
console.log('age 2', age(20));
function buildname(firstname, lastname = "Haddad") {
    //si lastname = true return firstname + ""+ lastname
    if (lastname)
        return firstname + "" + lastname;
    else
        return firstname;
}
let result1 = buildname("Richard ", "Ha");
let result2 = buildname("toto ");
console.log(result1);
console.log(result2);
function build(firstname = "Will", lastname) {
    return firstname + "" + lastname;
}
let result3 = build(undefined, " haddad");
console.log("Result3", result3);
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
function total(arg1, arg2, totalversion) {
    let result;
    if (totalversion === 'getStringValue') {
        result = arg1.toString() + arg2.toString();
    }
    else if (totalversion === 'getSquare') {
        const val = arg1 + arg2;
        result = val ** 2;
    }
    else {
        result = arg1 + arg2;
    }
    return result;
}
const totalOne = total(20, 10, "getStringValue");
console.log(totalOne);
const totalTwo = total(20, 10, 'getSquare');
console.log(totalTwo);
//const doit etre initalisé
let pseudo = 'superman';
let total = 200;
let isLoading = false;
//intellisence
let welcomeMsg = `
Bienvenue ${pseudo}
Vous avez un total de ${total} points
`;
console.log(welcomeMsg);
let cars = {
    color: 'red',
    date: 2020,
    speed: 500,
};
let bus = {
    color: "blue",
    date: 2023,
    speed: 200
};
bus.color = "red";
cars.color = 'orange';
console.log(cars);
console.log(bus);
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
const form = document.getElementById('signupForm');
const firstName = document.getElementById('firstname');
const age = document.getElementById('age');
function gift(age) {
    return age + 3;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (+age.value < 18) {
        console.log('inscription refusé');
    }
    else {
        console.log(`Binevnue ${firstName.value}.
        vous avez ${age.value}.
        vous aure droit à un cadeau quand vous aurez ${gift(+age.value)}
        `);
    }
});
let strNum = ['red', 2, false];
strNum.push('salut', 200, 29, true, 'hello');
strNum[8] = 'bijours';
console.log(strNum);
//name space
/// <reference path="PersonInterface.ts" />
var App;
(function (App) {
    const person = new App.PersonM("Homer", 60);
    console.log(person);
})(App || (App = {}));
const menbers = {
    level: ['admin', 1]
};
menbers.level[0] = 'user';
menbers.level[1] = 2;
menbers.level.push('tirs');
console.log(menbers.level);
const welcome = (username) => {
    console.log(`Bienvenue ${username}`);
};
const getProfileData = (user) => {
    console.log(`
  id: ${user.id}
  username: ${user.username}
  `);
};
console.log(getProfileData({ id: 1234, username: "ricardo" }));
console.log(welcome('Richard'));
const invoice = (productName, user) => {
    console.log(`
    Produit: ${productName.name}
    Prix: ${productName.price}€
    iD Client: ${user.id}
    Nom du Client: ${user.username}
    `);
};
let productDetails = {
    name: 'Formation PHP',
    price: 99
};
invoice(productDetails, { id: 1234, username: "ricardo" });
const firstname = document.getElementById('firstname');
const age = document.getElementById('age');
console.log(typeof age.value);
const form = document.getElementById('signupForm');
const gender = document.getElementById('genre');
//Validation
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(firstname.value, age.valueAsNumber, gender.value);
});
/*type AcceptedValues = string | number;

function format(values:AcceptedValues) {
    if(typeof values === "string"){
        return values.length;

    }else if(typeof values === 'number'){
        return values.toString();

    }else{
        const verifyCases:never = values;
    }
}*/
function throwError(errMsg) {
    throw new Error(errMsg);
}
function getTotal(arg) {
    if (arg < 5) {
        return throwError('Attention le total est infieur  à 5');
    }
    else if (arg === 5) {
        console.log(arg);
    }
    else {
        return arg + 10;
    }
}
const sayHello = function (textMsg) {
    let i = 0;
    while (i < 5) {
        console.log(textMsg);
        i++;
    }
};
sayHello('Hello world');
function gift(age) {
    return age + 3;
}
console.log(typeof gift(30));
function clgData(arg) {
    console.log(`Resultat: ${arg}`);
}
clgData(gift(20));
function concat(arg1, arg2) {
    let result;
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        result = arg1 + arg2;
    }
    else if (typeof arg1 === "string" && typeof arg2 === "string") {
        result = arg1 + arg2;
    }
    else {
        result = arg1.toString() + arg2.toString();
    }
    return result;
}
console.log(concat(20, 40));
console.log(concat("Hello ", "world"));
console.log(concat("toto ", 20));
let inputData;
inputData = 20;
console.log(typeof inputData);
let inputAge;
if (typeof inputData === 'number') {
    inputAge = inputData;
    console.log(typeof inputAge);
}
const objOne = { name: "bart" };
const objTwo = { age: 8 };
function objInArray(n, a) {
    let data = [];
    data.push(n, a);
    return data;
}
let resultat = objInArray(objOne, objTwo);
console.log(resultat);
const userdate = {
    id: 10,
    data: ['r', 'b']
};
const userdate2 = {
    id: 10,
    data: { name: 'ric', role: 'Moderator' }
};
console.log(userdate2);
class dataBase {
    data = [];
    saveData(val) {
        this.data.push(val);
    }
    getAllData() {
        return [...this.data];
    }
}
const strData = new dataBase();
strData.saveData("Marge");
strData.saveData("Homer");
const results = strData.getAllData();
console.log(results);
const numbData = new dataBase();
numbData.saveData(10);
console.log(numbData.getAllData());
const objData = new dataBase();
objData.saveData({ name: 'toto', id: 1 });
console.log(objData.getAllData());
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
