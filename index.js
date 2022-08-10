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
makeGrid(256);

function makeGrid(num){
for(let i = 1; i <= num; i++){
    let gridPart = document.createElement("div");
    gridPart.className = "gridPart";
    container.appendChild(gridPart);
}
}