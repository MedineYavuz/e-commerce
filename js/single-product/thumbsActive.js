export function thumbsActiveFunc(){
    const thumbs = document.querySelectorAll("gallery-thumbs .glide__slide")

    thumbs.forEach((item)=>{
        item.addEventListener("click",function(){
            console.log("click");
        })
    })
}