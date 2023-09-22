class Mother  {
    name:string
    eyes:number
    constructor(n:string,e:number){
        this.name = n
        this.eyes = e
    }
    speak(){
        console.log(`Je me presente je m'apelle ${this.name}`)
    }
}

let ric = new Mother('Ric', 2)
ric.speak()
console.log(ric)

interface Person {
    name:string
   readonly eyes:number
    speak(a:string):string
} 

let henri:Person;

henri ={
    name:'roc',
    eyes:2,
    speak(a:string):string {
        return a +'' +this.name
    }
}

const talkinPerson = (a:Person , b:string) => {
    return a.speak(b)
}

const result = talkinPerson(henri, ' je suis')

console.log(result)

let cyclope:Person ={
    name:'thor',
    eyes:1,
    speak(a:string):string {
        return a +'' +this.name
    }
}
cyclope.name = 'bruce'