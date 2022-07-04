
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function makeRows(rows, cols) {
    
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (c = 0; c < (rows * cols); c++) {

    let cell = document.createElement("div");

    //cell.innerText = (c + 1);

    container.appendChild(cell).className = "grid-item";

    cell.addEventListener('mouseover', e => e.target.classList.add('grid-item-hover'));
    
  };

};

makeRows(16, 16);


function changeBackground() {

let getGrid = document.querySelector(".grid-item");

getGrid.addEventListener("mouseover", function() {

    getGrid.classList.add("grid-item-hover");

});

}

$(document).on("mouseover", ".grid-item", function() {


    getGrid.classList.add("grid-item-hover");
});

$(document).on("mouseleave", ".grid-item", function() {
    // hover ends code here
});