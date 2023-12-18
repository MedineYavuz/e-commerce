export function thumbsActiveFunc(){
    const thumbs = document.querySelectorAll("gallery-thumbs .img-fluid");

    const singleImage = document.querySelector("#single-image");

    console.log(thumbs);

    thumbs.forEach((item)=>{
        item.addEventListener("click",function(){
            singleImage.src = item.src;
        })
    })
}