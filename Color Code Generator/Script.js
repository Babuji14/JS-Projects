const codeContainer=document.querySelector(".color-container");

for (let i = 0; i < 15; i++) {
    const codeContainerEl=document.createElement("div");
    codeContainerEl.classList.add("code-container");
    codeContainer.appendChild(codeContainerEl)
}

const codel=document.querySelectorAll(".code-container");

// Function to generate and apply color codes
function generator() {
    codel.forEach((codeelement) => {
        const newcolorcode = randomColor();
        codeelement.style.backgroundColor = "#" + newcolorcode;
        codeelement.innerText = "#" + newcolorcode;
    });
}

// Function to generate a random 6-digit hex color code
function randomColor(){
    const characters="0123456789abcdef";
    const colorCodeLength=6;
    let colorCode ="";
    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum=Math.floor(Math.random() * characters.length);
        colorCode+=characters.substring(randomNum, randomNum+1);
    }
    return colorCode;
}

generator();