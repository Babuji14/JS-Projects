const codeContainer=document.querySelector(".color-container");

for (let i = 0; i < 20; i++) {
    const codeContainerEl=document.createElement("div");
    const icon=document.createElement("i");
    icon.classList.add("fa-regular", "fa-copy");
    codeContainerEl.classList.add("code-container");
    codeContainer.appendChild(codeContainerEl);
    codeContainer.appendChild(icon);
}

const codel=document.querySelectorAll(".code-container");

// Function to generate and apply color codes
function generator() {
    codel.forEach((codeelement) => {
        const newcolorcode = randomColor();
        codeelement.style.backgroundColor = "#" + newcolorcode;
        codeelement.innerHTML = `<span class="color-code">#${newcolorcode}</span> <i class="fa-regular fa-copy"></i>`;
    
    const copyicon=codeelement.querySelector(".fa-copy");
    copyicon.addEventListener("click", ()=>{
        copyToClipboard(`#${newcolorcode}`);
        
        codeelement.innerHTML = `<span class="color-code">Copied!</span> <i class="fa-regular fa-copy"></i>`;
        
        setTimeout(() => {
            codeelement.innerHTML = `<span class="color-code">#${newcolorcode}</span> <i class="fa-regular fa-copy"></i>`;
        }, 1500);
        });
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

// Function to copy text to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

generator();
