
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

    let newSize = prompt("Enter a number between 1 - 100");

    const grid = document.getElementById("grid-id");

    let toInt = parseInt(newSize);

    if (toInt > 1 && toInt <= 100) {

        grid.remove();
    
        $('.grid-item').remove();
    
        makeRows(toInt, toInt);

    }
    else {

        alert("The value must be a number between 1 and 100.");
        getInput();
    }


}

makeRows(16, 16);

let newSketch = document.querySelector('#newSketch');

newSketch.addEventListener('click', getInput);