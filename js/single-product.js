import { thumbsActiveFunc } from "./single-product/thumbsActive.js";
import zoomFunc from "./single-product/zoom.js"
import { singleThumbs } from "./glide.js";
import colorsFunc from "./single-product/color.js"
import valuesFunc from "./single-product/values.js"



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

thumbsActiveFunc()
