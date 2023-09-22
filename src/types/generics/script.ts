const objOne = {name: "bart"}
const objTwo = {age: 8}

function objInArray<N extends {name: string},A extends {age:number}>(n:N,a:A) {
    let data:Array<object> = [];
    data.push(n,a)

    return data
 
}

let resultat = objInArray(objOne,objTwo)

console.log(resultat)

