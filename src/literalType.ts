function total(arg1:number,arg2:number,totalversion:'getStringValue' | 'getSquare') {
    let result;
    if(totalversion === 'getStringValue'){
        result = arg1.toString() + arg2.toString()
    }else if(totalversion === 'getSquare'){
        const val = arg1 + arg2
        result = val ** 2
    }else {
        result = arg1 + arg2 
    }
    return result;
}

const totalOne = total(20, 10, "getStringValue")
console.log(totalOne)

const totalTwo = total(20, 10 , 'getSquare')
console.log(totalTwo)

