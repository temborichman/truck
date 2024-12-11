const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("open");
    menu.classList.toggle("dropped");
})

const burger = document.querySelector(".burger");
const drop = document.querySelector(".drop");

burger.addEventListener("click", ()=>{
    burger.classList.toggle("open");
    drop.classList.toggle("dropped");
})