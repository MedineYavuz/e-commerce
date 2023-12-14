
import Header from "./header.js";

Header();

import productsFunc from "./product.js"


//?--------------------------------------------



// add product to local storage start

async function getData() {
    const photos = await fetch("../js/data.json");
    const data = await photos.json();

   data ? localStorage.setItem("products",JSON.stringify(data)) : [];

   productsFunc();


}
getData();

// add product to local storage end


const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";



