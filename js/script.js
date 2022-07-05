
const container = document.getElementById("grid-main");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function makeRows(rows, cols) {
    
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (c = 0; c < (rows * cols); c++) {

    let cell = document.createElement("div");
    cell.setAttribute("id", "grid-id");

    container.appendChild(cell).className = "grid-item";

    cell.addEventListener('mouseover', e => e.target.classList.add('grid-item-hover'));
    
  };

};

function getInput() {

    let number = prompt("Enter a number");

    const grid = document.getElementById("grid-id");

    grid.remove();

    $('.grid-item').remove();

    makeRows(number, number);
}

makeRows(16, 16);

let newSketch = document.querySelector('#newSketch');

newSketch.addEventListener('click', getInput);