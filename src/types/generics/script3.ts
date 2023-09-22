 //Type readonly
 let colors1:Readonly<string[]> = ['blue','red','green']

//type Record<key, type>

//
interface SuperHeros {
    name:string,
    power: number,
    marvel:boolean,
    dcComics:boolean
}

//key de type Record 
type Name = "Batman" | "Spiderman"| "Superman" ;


let heros:Record<Name, SuperHeros> = {
    Batman: {name:"Batman",power:10,marvel:false,dcComics:true},
    Spiderman: {name:"Spiderman",power:30,marvel:true,dcComics:false},
    Superman: {name:"Superman",power:80,marvel:false,dcComics:true},
}

console.log(heros)

heros.Spiderman.marvel && console.log(`${heros.Spiderman.name} est Marvel`)

//Le type permet de selectionner de proprietes désirées

interface Todo {
    title :string
    description:string
    completed:boolean
}

let todo1: Todo = {
    title:'coucou',
    description:'',
    completed:true
}
type TodoPreview = Pick<Todo, 'title' | 'completed'>

let todo2: TodoPreview = {
    title: 'coucou',
    completed:false
}

//Type Omit

type TodoPerm = Omit<Todo, 'title' | 'completed'>

let todo3: TodoPerm = {
    description:'voila'
}

//type Exclude

type Easing = "ease-in" | "ease-out" | "ease-in-out";

type Animate = Exclude<Easing, "ease-out">
class UIElement {
    animate(x:number,y:number, easing:Animate ){
        if(easing === "ease-in")
        console.log("ease-in")

       // if(easing === "ease-out")
        //console.log("ease-out")

        if(easing === "ease-in-out")
        console.log("ease-int-out")

    }
}

let button = new UIElement();

button.animate(0,0,"ease-in");

//Type Extract<Type , union>

type Couleurs = 'red' | 'blue' | 'orange' | 'green'

type MyColors = 'red' | 'purple' | 'green';

type AcceptedColors = Extract<Couleurs,MyColors>

function clgColord(arg:AcceptedColors) {
    console.log(arg)
}

clgColord("green")

// type NonNullable

class Car1 {
    color? : "Green" | "Black" | "White" | "Red"

    paint(color: NonNullable<Car1['color']>){
        console.log(color)
    }
}

const ford1 = new Car1()
ford1.paint('Green');

//Type Parameters

function fetchUser(id:number, username:string) {
   return {
    id,
    username
   }
    
}

type FetchUserParams = Parameters<typeof fetchUser>;

function fecthLoggedUser(...params: FetchUserParams) {
   const numberData =  fetchUser(...params)
   console.log(numberData)
}

fecthLoggedUser(2,'Jhon')

//Type ReturnType <Type>
type fetchUserReturn = ReturnType<typeof fetchUser>;
function fecthLoggedUser1(...params: FetchUserParams) {
    const numberData =  fetchUser(...params)
    console.log(numberData)

    let user1 : fetchUserReturn = numberData;
 }
