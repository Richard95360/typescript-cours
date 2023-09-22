"use strict";
const objOne = { name: "bart" };
const objTwo = { age: 8 };
function objInArray(n, a) {
    let data = [];
    data.push(n, a);
    return data;
}
let resultat = objInArray(objOne, objTwo);
console.log(resultat);
