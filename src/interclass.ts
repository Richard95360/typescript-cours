interface HumanSounds {
    talk():string
}
interface AlienSounds {
    telepathy():string
}

class Person implements HumanSounds{
    constructor(readonly name:string,private age:number){

    }
   /* talk(){
        return `je m'appelle ${this.name}`
    }*/
    talk(): string {
        return `je m'apelle ${this.name}`
    }
}

class Alien  {
    constructor(readonly name:string,private age:number){

    }
    telepathy(){
        return `je m'apelle ${this.name}. Je suis un ado de ${this.age} ans`
    }
    
}

const form = document.getElementById('signupForm') as HTMLFormElement
const firstname = document.getElementById('firstname') as HTMLInputElement
const age = document.getElementById('age') as HTMLInputElement
const species = document.getElementById('species') as HTMLSelectElement

form.addEventListener('submit', (e:Event) => {
    e.preventDefault()
    let humanUser:HumanSounds;
    if(species.value === 'human'){
        humanUser = new Person(firstname.value, +age.value)
        console.log(humanUser, humanUser.talk())
    }else{
        let alienUser:AlienSounds
        alienUser = new Alien(firstname.value, +age.value)
        console.log(alienUser, alienUser.telepathy())
    }
})