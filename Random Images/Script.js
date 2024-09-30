const imagecontainer=document.querySelector(".image-container");
const btn=document.querySelector(".btn");


btn.addEventListener("click", ()=>{
    images=2;/*We can modify the number of images that will be displayed.*/
    addNewImages();    
});
function addNewImages(){
    for (let i = 0; i < images; i++) {
        const newImages=document.createElement("img");
        newImages.src = `https://picsum.photos/300/${Math.floor(Math.random() * 2000)}`;
        imagecontainer.appendChild(newImages);    
    }
}
