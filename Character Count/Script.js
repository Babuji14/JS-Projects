const textarea = document.getElementById("text");
const charactercount=document.querySelector(".count-character");
const remainingcount =document.querySelector(".remaining-character");

textarea.addEventListener("focus", () =>{
    textarea.value="";
});

textarea.addEventListener("keyup", () =>{
    updatecount();
});

function updatecount(){
    charactercount.innerText=textarea.value.length;
    remainingcount.innerText=textarea.getAttribute("maxlength")-textarea.value.length;

}