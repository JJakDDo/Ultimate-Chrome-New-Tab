const bg = document.querySelector(".bgDiv");
let imgSrc = "https://source.unsplash.com/random";

function addScreenSize(){
    const width = screen.width;
    const height = screen.height;
    imgSrc = imgSrc + `/${width}x${height}`;
}

function getBackgroundImage(){
    const image = new Image();
    addScreenSize();
    console.log(imgSrc);
    image.src = imgSrc;
    image.classList.add("bg");
    bg.appendChild(image);
}

function init(){
    getBackgroundImage();
}

init();