const imagecontainer = document.querySelector(".image-container");
const btn = document.querySelector(".btn");
const pictures = document.querySelectorAll(".pictures")
const modelContainer = document.querySelector(".model-container");
const modelImg = document.querySelector(".model-img");
const closeBtn = document.querySelector(".close");
const preBtn=document.querySelector(".btn-prev");
const nxtBtn=document.querySelector(".btn-next");
let currentIndex = 0;
const downloadButton=document.querySelector(".download-btn");


btn.addEventListener("click", () => {
    images = 2;
    addNewImages();
});

function addNewImages() {
    for (let i = 0; i < images; i++) {
        const newImages = document.createElement("img");
        newImages.src = `https://picsum.photos/200/${Math.floor(Math.random() * 2000)}`;
        
        newImages.classList.add("pictures");
        imagecontainer.appendChild(newImages);

        newImages.addEventListener("click", function () {
            modelImg.src = newImages.src; 
            modelContainer.classList.add("active");
            modelImg.style.objectFit="fill";
        });
    }
}

pictures.forEach((pics, i) => {
    pics.addEventListener("click", function() {
        currentIndex=i;
        modelContainer.classList.add("active");
        modelImg.src = pics.src;
    });
});

closeBtn.addEventListener("click", function () {
    modelContainer.classList.remove("active");
});

nxtBtn.addEventListener("click", function(){
    currentIndex=(currentIndex+1)%pictures.length;
    modelImg.src=pictures[currentIndex].src;
});

preBtn.addEventListener("click", function(){
    currentIndex=(currentIndex-1 +pictures.length)%pictures.length;
    modelImg.src=pictures[currentIndex].src;
});

function src(imageLink){
    modelImg.src=imageLink;
    downloadImgsrc(imageLink);
}

function downloadImgsrc(imageSrc){
    downloadButton.href=imageSrc;
}
