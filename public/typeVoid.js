"use strict";
function gift(age) {
    return age + 3;
}
console.log(typeof gift(30));
function clgData(arg) {
    console.log(`Resultat: ${arg}`);
}
clgData(gift(20));
