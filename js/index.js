
import Header from "./header.js";

Header();

import productsFunc from "./product.js"


//?--------------------------------------------



// add product to local storage

async function getData() {
    const photos = await fetch("../js/data.json");
    const data = await photos.json();

   data ? localStorage.setItem("products",JSON.stringify(data)) : [];


}
getData();

const products = localStorage.getItem("products");
console.log(JSON.parse(products));

const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";



