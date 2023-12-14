import { cart } from "./product.js";


function displayCartProduct(){
    const cartWrapper = document.querySelector(".cart-wrapper");

    let result ="";

    cart.forEach((item)=> {
        result += `
        <tr class="cart-item">
            <td></td>
            <td class="cart-image">
                 <img src=${item.img.singleImage} alt="" />
                 <i class="bi bi-x delete-cart"></i>
            </td>
            <td>${item.name}</td>
            <td>${item.price.newPrice}</td>
            <td style="text-align: center">${item.quantity}</td>
            <td style="text-align: center">$100.00</td>
        </tr>`
    });

    cartWrapper.innerHTML = result;
    console.log(result);
}

displayCartProduct();