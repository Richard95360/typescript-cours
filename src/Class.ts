class Invoice {
    client:string;
    product:string;
    price:number;
    constructor(client:string,product:string,price:number){
        this.client = client
        this.product = product
        this.price = price
    }
}

const invoice1 = new Invoice("ric","bic",25)
const invoice2 :Invoice = {client:"nord",product: "pc",price:55}
console.log(invoice2)