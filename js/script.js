
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function makeRows(rows, cols) {
    
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (c = 0; c < (rows * cols); c++) {

    let cell = document.createElement("div");

    cell.innerText = (c + 1);

    container.appendChild(cell).className = "grid-item";
    
  };

};

makeRows(16, 16);

let getGrid = document.querySelector(".grid-item");