import { thumbsActiveFunc } from "./single-product/thumbsActive.js";
import zoomFunc from "./single-product/zoom.js"
import { singleThumbs } from "./glide.js";
import colorsFunc from "./single-product/color.js"
import valuesFunc from "./single-product/values.js"
import tabsFunc from "./single-product/tabs.js"




const productId = localStorage.getItem("productId") ? JSON.parse(localStorage.getItem("productId")) : localStorage.setItem("productId",JSON.stringify(1));

const products =  localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : localStorage.setItem("products",JSON.stringify([]));

const findProduct = products.find((item)=> item.id === Number(productId));

// product title

const productTitle = document.querySelector(".product-title");

productTitle.innerHTML =findProduct.name;

// product price

const newPrice = document.querySelector(".new-price");
const oldPrice = document.querySelector(".old-price");

newPrice.innerHTML = findProduct.price.newPrice.toFixed(2);

oldPrice.innerHTML = findProduct.price.oldPrice.toFixed(2);

// product gallery

const singleImage = document.querySelector("#single-image");

singleImage.src = findProduct.img.singleImage;


const galleryThumbs = document.querySelector(".gallery-thumbs");
let result="";


findProduct.img.thumbs.forEach((item)=> {
    result += `
    <li style="width: 109px; margin-right: 5px"
    class="glide__slide">
    <img src=${item} alt="" class="img-fluid"/>
    </li>
    `;
});




galleryThumbs.innerHTML = result;
singleThumbs();

thumbsActiveFunc();

// add to cart

let cart =localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const findCart = cart.find((item)=> item.id === findProduct.id);

const btnAddToCart = document.getElementById("add-to-cart");
const quantity =document.getElementById("quantity");
let cartItems = document.querySelector(".header-cart-count");


if(findCart) {
    btnAddToCart.setAttribute("disabled","disabled");
}else{
    btnAddToCart.addEventListener("click",function(){
        cart.push({...findProduct,quantity:Number(quantity.value)});

        btnAddToCart.setAttribute("disabled","disabled");
        localStorage.setItem("cart",JSON.stringify(cart));
        cartItems.innerHTML = cart.length;
        
    });
};

