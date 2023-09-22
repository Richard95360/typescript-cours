function gift(age: number){
   return   age + 3
}
console.log(typeof gift(30))

function clgData(arg:any) {
    console.log(`Resultat: ${arg}`)
}
clgData(gift(20))