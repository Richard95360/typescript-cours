 namespace App{
 interface PersonInterface {
        name:string;
        age :number
    }
   export class PersonM implements PersonInterface {
        name: string;
        age: number;
    
        constructor(n:string,a:number){
            this.name = n;
            this.age = a
        }
       
    }


}