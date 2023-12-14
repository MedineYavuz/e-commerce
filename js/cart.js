let cart = localStorage.getItem("cart")
? JSON.parse(localStorage.getItem("cart"))
: [];





function displayCartProduct(){
    const cartWrapper = document.querySelector(".cart-wrapper");

    let result ="";

    cart.forEach((item)=> {
        result += `
        <tr class="cart-item">
            <td></td>
            <td class="cart-image">
                 <img src=${item.img.singleImage} alt="" />
                 <i class="bi bi-x delete-cart" data-id=${item.id}></i>
            </td>
            <td>${item.name}</td>
            <td>${item.price.newPrice.toFixed(2)}</td>
            <td style="text-align: center">${item.quantity}</td>
            <td style="text-align: center">${(item.price.newPrice * item.quantity).toFixed(2)}</td>
        </tr>`
    });

    cartWrapper.innerHTML = result;

    removeCartItem();
    
}

displayCartProduct();

function removeCartItem (){

    let cartItems = document.querySelector(".header-cart-count");

    const btnDeleteCart = document.querySelectorAll(".delete-cart");

    btnDeleteCart.forEach((button)=> {
        button.addEventListener("click",function(e){
            const id =e.target.dataset.id;
            cart= cart.filter((item)=> item.id !== Number(id));
            displayCartProduct();

            localStorage.setItem("cart",JSON.stringify(cart));

            cartItems.innerHTML = cart.length;

            saveCartValues();
        })
    })
}

//cart fiyat hesaplama:

function saveCartValues(){
    const cartTotal = document.getElementById("cart-total");
    const subtotal = document.getElementById("subtotal");
    const fastCargo = document.getElementById("fast-cargo");

let itemsTotal = 0;
cart.length >0 && cart.map((item) => (itemsTotal += item.price.newPrice * item.quantity));

subtotal.innerHTML= `$${itemsTotal.toFixed(2)}`;
cartTotal.innerHTML= `$${itemsTotal.toFixed(2)}`;
const fastCargoPrice = 15;
fastCargo.addEventListener("change",function(e){
    if(e.target.checked){
        cartTotal.innerHTML = `$${(itemsTotal + fastCargoPrice).toFixed(2)}`;
    }else{
        cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;

    }
});


}

saveCartValues();

