interface User<T> {
    id:number,
    data: T
}

const userdate :User<string []> = {
    id: 10,
    data: ['r','b']
}
const userdate2 :User<{name:string,role: 'Moderator'}> = {
    id: 10,
    data: {name:'ric', role:'Moderator'}
}

console.log(userdate2)