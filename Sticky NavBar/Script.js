const nav=document.querySelector(".header");
const para=document.querySelector(".para-container");
const navbar=document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY>para.offsetTop-navbar.offsetHeight-20){
        nav.classList.add("active");
    }else{
        nav.classList.remove("active");
    }
});