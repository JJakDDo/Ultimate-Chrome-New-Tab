const addLink = document.querySelector(".addLink");
const modal = document.querySelector(".modal");
const background = document.querySelector(".bg_modal");
const close = document.querySelector(".close");

function showModal(){
    modal.classList.remove("modal_close");
    modal.classList.add("modal_show");
}

function closeModal(){
    modal.classList.remove("modal_show");
    modal.classList.add("modal_close");
}
function init(){
    addLink.addEventListener("click", showModal);
    close.addEventListener("click", closeModal);
    background.addEventListener("click", closeModal);
}

init();