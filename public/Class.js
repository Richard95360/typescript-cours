"use strict";
class Invoice {
    client;
    product;
    price;
    constructor(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
}
const invoice1 = new Invoice("ric", "bic", 25);
const invoice2 = { client: "nord", product: "pc", price: 55 };
console.log(invoice2);
