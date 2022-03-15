const DEFAULT_SIZE = 16;
let currentSize = DEFAULT_SIZE;

const grid = document.querySelector("#grid");

function drawGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('gridElement');
      grid.appendChild(gridElement);
  }
}

let getSize = prompt("What grid size to use?", '16');
drawGrid(getSize);
console.log(grid.style.gridTemplateColumns);