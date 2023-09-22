function giftOne(num: number) {
    return num +3
}
function displayClg(arg: number) {
    return arg
}

let age: (num:number)=> number;

age = giftOne;
console.log('age 1',age(20))
age = displayClg
console.log('age 2',age(20))

function buildname(firstname:string, lastname = "Haddad") {
    //si lastname = true return firstname + ""+ lastname
    if(lastname)return firstname + ""+ lastname
    else return firstname;
}

let result1 = buildname("Richard ", "Ha")
let result2 =buildname("toto ")
console.log(result1)
console.log(result2)

function build(firstname ="Will", lastname:string) {
  return firstname +""+lastname
}

let result3 = build(undefined, " haddad")

console.log("Result3",result3)