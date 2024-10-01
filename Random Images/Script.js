const imagecontainer = document.querySelector(".image-container");
const btn = document.querySelector(".btn");
const pictures = document.querySelectorAll(".pictures")
const modelContainer = document.querySelector(".model-container");
const modelImg = document.querySelector(".model-img");
const closeBtn = document.querySelector(".close");
let index=0;

btn.addEventListener("click", () => {
    images = 2;
    addNewImages();
});

function addNewImages() {
    for (let i = 0; i < images; i++) {
        const newImages = document.createElement("img");
        newImages.src = `https://picsum.photos/300/${Math.floor(Math.random() * 2000)}`;
        newImages.classList.add("pictures");
        imagecontainer.appendChild(newImages);
        
        newImages.addEventListener("click", function () {
            modelImg.src = newImages.src; 
            modelContainer.classList.add("active");
        });
    }
}

pictures.forEach((pics, i) => {
    pics.addEventListener("click", function() {
        modelContainer.classList.add("active");
        modelImg.src = pics.src;
    });
});

closeBtn.addEventListener("click", function () {
    modelContainer.classList.remove("active");
});

