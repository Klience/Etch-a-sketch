const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR; // drawing color, not cell's background
let currentMode = DEFAULT_MODE;

const grid = document.querySelector('#grid');
const sizePicker = document.querySelector('#sizePicker');
const sizeValue = document.querySelector('#sizeValue');
const colorPicker = document.querySelector('#colorPicker');
const colorBtn = document.querySelector('#colorBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const eraseBtn = document.querySelector('#eraseBtn');
const clearBtn = document.querySelector('#clearBtn');

sizePicker.addEventListener('mousemove', e => getSize(e.target.value));
sizePicker.addEventListener('change', e => setSize(e.target.value));
colorPicker.addEventListener('change', e => getColor(e.target.value));
colorBtn.addEventListener('click', () => setMode('color'));
rainbowBtn.addEventListener('click', () => setMode('rainbow'));
eraseBtn.addEventListener('click', () => setMode('erase'));
clearBtn.addEventListener('click', () => resetGrid());


function getSize(size) {
  sizeValue.innerText = `${size} x ${size}`;
}

function getColor(color) {
  currentColor = color;
  console.log(currentColor);
}

function setSize(size) {
  currentSize = size;
  console.log(currentSize);
}


/*
function setMode() {
  // color -- color I picked
  // rainbow -- random color each time
  // erase -- revert to default color

  // this function returns color mode only (not value)?
}
function getMode() {
  // GET AND SET SHALL BE INTERCHANGED
}
function setColor() {
  // returns color I picked or random color, or default (erase)
  // set via 'node.style.color.value'
  // put erase as a separate function?
}
function getColor()
function setSize()
function getSize() {
  // as the mouse is up from slider sizePicker, it shall reset the grid using that size and default color
}
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
//  console.log(grid.style.gridTemplateColumns);
  console.log(sizePicker.value);
  console.log(sizeValue.innerText);
}