import { ProductManager } from "./productManager.js";

let caidim = new ProductManager("./Products.json");

//title, description, price, thumbnail, code, stock

caidim.addProduct(
  "Escobas",
  "Escobas 50",
  200,
  "sin imagen",
  "005",
  10
);
caidim.addProduct(
  "Detergente Ultra",
  "Detergente CIF 1000 cm3",
  2000,
  "sin imagen",
  "002",
  10
);
caidim.addProduct(
  "Jabón Tocador",
  "Jabón Rexona x 3",
  900,
  "sin imagen",
  "003",
  10
);