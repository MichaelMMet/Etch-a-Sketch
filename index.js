
const container = document.querySelector(".container");
const slider = document.querySelector(".grod");
const slideOut = document.querySelector(".output");
const reset = document.querySelector(".reset");


slideOut.innerHTML = slider.value;


/*
function updateOutput(){
    comsole.log(slider.value);
slideOut.innerHTML = slider.value;

}
*/
/*
reset.addEventListener("click", resetBoard);

function resetBoard(){
let allDivs = container.querySelectorAll("div");
allDivs.forEach((div) => allDivs.style.backgroundColor="black");
}
*/

/*
slider.oninput = function () {
    slideOut.innerHTML = this.value;
    let value = this.value;
    console.log(slider.value);
}
*/

function makeGrid(num) {
    container.style.gridTemplateColumns = `repeat(${num} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${num} , 1fr)`;
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    let total = num * num;

    for (let i = 1; i <= total; i++) {
        let gridPart = document.createElement("div");
        gridPart.className = "gridPart";
        //gridPart.addEventListener("mouseover", colorSquares);
        gridPart.addEventListener("mouseover", () => {

            
            if (document.getElementById("black").checked) {
                gridPart.style.backgroundColor = "black";
            } else if (document.getElementById("random").checked) {
                let r = () => Math.random() * 256 >> 0;
                gridPart.style.backgroundColor = `rgb(${r()}, ${r()}, ${r()})`;
            } else if (document.getElementById("white").checked) {
                gridPart.style.backgroundColor = "white";
            }
            //gridPart.style.backgroundColor = `rgb(${Math.floor(Math.random * 255)},${Math.floor(Math.random * 255)},${Math.floor(Math.random * 255)}) `;
            //gridPart.style.backgroundColor = `rgb(${r()}, ${r()}, ${r()})`;
            // gridPart.style.backgroundColor = "black";
            
        });
        gridPart.style.backgroundColor = "white"
        container.appendChild(gridPart);
    }
}

function changeSize(input) {
    slideOut.innerHTML = slider.value;
    makeGrid(input);
}
/*
function colorSquares(){
    let gridPart = document.querySelectorAll(".gridPart");
    if (document.getElementById("black").checked) {
        gridPart.style.backgroundColor = "black";
    } else if (document.getElementById("random").checked) {
        let r = () => Math.random() * 256 >> 0;
        gridPart.style.backgroundColor = `rgb(${r()}, ${r()}, ${r()})`;
    } else if (document.getElementById("white").checked) {
        gridPart.style.backgroundColor = "white";
    }
}
*/

function resetBoard(){
    let board = document.querySelector(".container");
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}


changeSize(16);
slider.value = 16;
slideOut.innerHTML = slider.value;
