"use strict";
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
