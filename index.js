/*
const grid = document.createElement("div");
const gridTwo = document.createElement("div");
const grid2 = document.createElement("div");
const gridOne1 = document.createElement("div");
const gridOne = document.createElement("div");
const gridOne = document.createElement("div");
const gridOne = document.createElement("div");
const gridOne = document.createElement("div");
const gridOne = document.createElement("div");
const gridOne = document.createElement("div");
const gridOne = document.createElement("div");
const gridOne = document.createElement("div");
const gridOne = document.createElement("div");
const gridOne = document.createElement("div");
const gridOne = document.createElement("div");
const gridOne = document.createElement("div");
*/
const container = document.querySelector(".container");
const slider = document.querySelector(".grod");
const slideOut = document.querySelector(".output");




slideOut.innerHTML = slider.value;

slider.oninput = function() {
    slideOut.innerHTML = this.value;
    let value = this.value;
    console.log(slider.value);
  }


function makeGrid(num){
    container.style.gridTemplateColumns = `repeat(${num} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${num} , 1fr)`;
    let squars = container.querySelectorAll("div");

    let total = num * num;

for(let i = 1; i <= total; i++){
    let gridPart = document.createElement("div");
    gridPart.className = "gridPart";
    container.appendChild(gridPart);
}
}

function changeSize(input){
    makeGrid(input);
}