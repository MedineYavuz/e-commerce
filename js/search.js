
//tıklanılan ürüne gitme

function productRoute(){
    const resultItemDOM = document.querySelectorAll(".search-results .result-item");

    resultItemDOM.forEach((item)=>{
        item.addEventListener("click",(e)=>{

            e.preventDefault();
           
           const id=item.dataset.id;
            if(id){
                localStorage.setItem("productId",JSON.stringify(id));
                window.location.href ="single-product.html"
            }
        })
    })
}

function searchFunc(products){

//   let modalWrapper= document.querySelector("modal-wrapper");
// let modalSearch= document.querySelector("modal-search");


 
// document.addEventListener("click", (e)=> {
//   if(!e.composedPath().includes(modalWrapper)){
//     modalSearch.style.visibility ="visible";
//     modalSearch.style.opacity ="1";
//   }
// });

    const searchWrapperDOM= document.querySelector(".search-results .results");

    let result = "";
    products.forEach((item)=>{
        result += `
        <a href="#" class="result-item" data-id=${item.id}>
              <img src=${item.img.singleImage} class="search-thumb" alt="">
              <div class="search-info">
                <h4>${item.name}</h4>
                <span class="search-sku">SKU: PD0016</span>
                <span class="search-rice">$${item.price.newPrice.toFixed(2)}</span>
              </div>
            </a>`
    });
    searchWrapperDOM.innerHTML = result;
    productRoute();


    // ürün arama işlemi

    const searchInputDOM= document.querySelector(".search-form input");
    let value="";
    let filtered=[];
    searchInputDOM.addEventListener("input",(e)=>{
        value=e.target.value;
        value=value.trim().toLowerCase();

       filtered = products.filter((item)=> item.name.trim().toLowerCase().includes(value));
       
       let result="";
       filtered.forEach((item)=> {
        result += `
        <a href="#" class="result-item" data-id=${item.id}>
              <img src=${item.img.singleImage} class="search-thumb" alt="">
              <div class="search-info">
                <h4>${item.name}</h4>
                <span class="search-sku">SKU: PD0016</span>
                <span class="search-rice">$${item.price.newPrice.toFixed(2)}</span>
              </div>
            </a>`
        
       });
       searchWrapperDOM.innerHTML = result;
       productRoute();
    })
  
};





export default searchFunc;