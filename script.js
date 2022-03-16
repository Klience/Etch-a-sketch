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

sizePicker.addEventListener('mousemove', e => setSizeValue(e.target.value));
sizePicker.addEventListener('change', e => setNewSize(e.target.value));
colorPicker.addEventListener('change', e => setNewColor(e.target.value));
colorBtn.addEventListener('click', () => setCurrentMode('color'));
rainbowBtn.addEventListener('click', () => setCurrentMode('rainbow'));
eraseBtn.addEventListener('click', () => setCurrentMode('erase'));
clearBtn.addEventListener('click', () => resetGrid());

// Updates grid size text: "size x size"
function setSizeValue(size) {
  sizeValue.innerText = `${size} x ${size}`;
}

// Updates current color with new color from color picker
function setNewColor(newColor) {
  currentColor = newColor;
}

// Updates current size with new size from size picker
function setNewSize(newSize) {
  currentSize = newSize;
  grid.innerText = '';
  drawGrid(newSize);
}

// Updates current mode with new mode from a corresponding button
function setCurrentMode(newMode) {
  setActiveBtn(newMode);
  currentMode = newMode;
}

// Updates current mode's button style as active
function setActiveBtn(newMode) {
  if (currentMode === 'rainbow') {
    rainbowBtn.classList.remove('active');
  } else if (currentMode === 'color') {
    colorBtn.classList.remove('active');
  } else if (currentMode === 'erase') {
    eraseBtn.classList.remove('active');
  }

  if (newMode === 'rainbow') {
    rainbowBtn.classList.add('active');
  } else if (newMode === 'color') {
    colorBtn.classList.add('active');
  } else if (newMode === 'erase') {
    eraseBtn.classList.add('active');
  }
}

function resetGrid() {
  currentSize = DEFAULT_SIZE;
  sizeValue.innerText = `${currentSize} x ${currentSize}`;
  sizePicker.value = currentSize;
  grid.innerText = '';
  drawGrid(currentSize);
}

// Draws a grid of specified size
function drawGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('gridElement');
    grid.appendChild(gridElement);
  }
}

// Draws a grid with default values when window loads
window.onload = () => {
  drawGrid(DEFAULT_SIZE);
}