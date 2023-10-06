const container = document.querySelector(".container");
const slider = document.querySelector(".grod");
const slideOut = document.querySelector(".output");
const reset = document.querySelector(".reset");

slideOut.innerHTML = slider.value;



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
           
        });
        gridPart.style.backgroundColor = "white"
        container.appendChild(gridPart);
    }
}

function changeSize(input) {
    slideOut.innerHTML = "Board Size: " +slider.value;
    makeGrid(input);
}


function resetBoard(){
    let board = document.querySelector(".container");
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}


changeSize(16);
slider.value = 16;
slideOut.innerHTML = "Board Size: " + slider.value;