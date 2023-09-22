abstract class Animal {
    constructor(public name: string){}
    walk(){
        console.log("je marche")
    }
  abstract  updateName(name :string):void; 
}

class Chat extends Animal {
    updateName(name: string): void {
       this.name = name
    }
}

let chat = new Chat("Schiamio")
chat.walk()
chat.updateName('Miaou')
console.log(chat)