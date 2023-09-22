type StrNum = string | number ;
type ObjIdUser = {id:number,username:StrNum}
type ObjInvoice = {name:string,price:number}
 const welcome = (username:StrNum) => {
  console.log(`Bienvenue ${username}`)
 }

 const getProfileData = (user: ObjIdUser) => {
  console.log(`
  id: ${user.id}
  username: ${user.username}
  `)
 }

 console.log(getProfileData({id:1234, username:"ricardo"}))
console.log(welcome('Richard'))

const invoice = (productName:ObjInvoice,user:ObjIdUser) => {
    console.log(`
    Produit: ${productName.name}
    Prix: ${productName.price}€
    iD Client: ${user.id}
    Nom du Client: ${user.username}
    `)
}

let productDetails = {
    name:'Formation PHP',
    price: 99
}

invoice(productDetails, {id:1234 , username:"ricardo"})