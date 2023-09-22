const divColors = document.getElementById('colors') as HTMLDivElement

let colors = function(arg1:string,...restOfColors:string[]) {
    console.log(restOfColors)
    const h1 = document.createElement('H1');
    h1.innerHTML = `Titre ${arg1}`;
    divColors.appendChild(h1);

    const ul = document.createElement('ul');

    for (let i in restOfColors) {
        let li = document.createElement('li');
        li.innerHTML = restOfColors[i];
        ul.appendChild(li);
    }
    divColors.appendChild(ul)
}
colors("List 1","green","red","orange")
colors("List 2","blue","black","pink")


function buildName(firstName:string, ...restOfName:string []) {
    return firstName +" "+ restOfName.join(" ")
}
let buildNameFun:(fnam:string,...rest:string[]) => string = buildName;

function sum(sum1:string,...restSum:string []){
    return sum1 + restSum
}

buildNameFun = sum;