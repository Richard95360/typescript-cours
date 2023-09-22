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

function throwError(errMsg:any):never {
    throw new Error(errMsg);
    
}
function getTotal(arg: number) {
    if(arg < 5) {
     return  throwError('Attention le total est infieur  à 5')
    } else if(arg === 5) {
        console.log(arg)
    }else {
        return arg + 10
    }
}

const sayHello = function (textMsg:string) {
    let i = 0;
    while(i < 5) {
        console.log(textMsg)
        i++
    }
}

sayHello('Hello world')
