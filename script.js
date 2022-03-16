const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

const grid = document.querySelector('#grid');

/*
function setMode() {
  // color -- color I picked
  // rainbow -- random color each time
  // erase -- revert to default color

  // this function returns color mode only (not value)?
}
function getMode() {
  //
}
function setColor() {
  // returns color I picked or random color, or default (erase)
  // set via 'node.style.color.value'
  // put erase as a separate function?
}
function getColor()
function setSize()
function getSize()
function resetGrid() {
  // reset the grid to default size, color and mode
}
*/

function drawGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('gridElement');
      grid.appendChild(gridElement);
  }
}

window.onload = () => {
  drawGrid(DEFAULT_SIZE);
  console.log(grid.style.gridTemplateColumns);
}