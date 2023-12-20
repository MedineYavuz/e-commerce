const commentReviewsFunc= function(){
    const commentStars = document.querySelectorAll(".comment-form-rating .star");
    commentStars.forEach((item)=>{
         item.addEventListener("click",(e)=>{
            e.preventDefault();
            commentStars.forEach((star)=> star.classList.remove("active"))
            item.classList.add("active");
         });
    });
};

const addNewCommentFunc = ()=> {

    let comments=[];

   let commentText= document.getElementById("comment-text");
   let commentName= document.getElementById("comment-name");
   let commentButton= document.querySelector(".form-submit input");
   let commentList= document.querySelector(".comment-list");

   let commentTextDom="";
   let commentNameDom="";


   commentText.addEventListener("input",function(e){
    commentTextDom=e.target.value;
  
   });

   commentName.addEventListener("input",function(e){
    commentNameDom=e.target.value;
   
   });
   

   function addComment(e){
    e.preventDefault();
    comments.push({ text: commentTextDom, name: commentNameDom });

    let result="";
    comments.forEach((item)=>{
        result += `
        <li class="comment-item">
            <div class="comment-avatar">
            <img src="img/avatars/avatar1.jpg" alt="">
            </div>
        <div class="comment-text">
          <ul class="comment-star">
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
          </ul>
          <div class="comment-meta">
            <strong>${item.name}</strong>
            -
            <time>April 23, 2022</time>
          </div>
          <div class="comment-desc">
            <p>
             ${item.text}
            </p>
          </div>
        </div>
      </li>`
    });

    commentList.innerHTML=result;

    commentText.value="";
    commentName.value="";

    

    
   }
     
   commentButton.addEventListener("click",addComment)
};

function commentsFunc(){
    commentReviewsFunc();
    addNewCommentFunc();
}

export default commentsFunc();