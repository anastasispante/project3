const chalk = require("chalk");
const products = require("./products.json");
console.log("to katastima mas exei" + products.length + "proionta");

let sum = 0;
let min = products[0].price;
let max = products[0].price;
for (let p of products) {
    if (p.sale) {
        console.log(p.name + ":" + chalk.red(p.sale));
    } else {
        console.log(p.name + ":" + p.price);
    }
    sum = sum + p.price;
    if (p.price > max) {
        max = p.price;
    }
    if (p.price < min) {
        min = p.price;
    }
}
console.log("sum:" + sum);
console.log("max:" + max);
console.log("min:" + min);
