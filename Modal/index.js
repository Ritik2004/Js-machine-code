


let btn = document.getElementById("btn")

let modal = document.getElementById("modal")

let close = document.getElementById("close")

btn.addEventListener("click", open);
close.addEventListener("click", closefun);

function open(){
    modal.style.display = "block"
}

function closefun(){
    modal.style.display = "none"
}

