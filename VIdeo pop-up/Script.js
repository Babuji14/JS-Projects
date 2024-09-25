const btn=document.querySelector(".btn");
const closeIcon=document.querySelector(".close-icon");
const video=document.querySelector(".video-container");

btn.addEventListener("click",() =>{
    video.classList.remove("active");    
});

closeIcon.addEventListener("click",()=>{
    video.classList.add("active")
});
