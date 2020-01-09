const container = document.querySelector('#container');
const root = document.documentElement;
const gridScale = 1.001;
const maxGridSize = 200;
const minGridSize = 2;
let containerSize = 500;  // base container size - will need to adjust slightly based on number of divs
let gridSize = prompt("Enter grid size between 2 and 200. eg. 4 for 4x4");

// bounds checking. rather than error, just set to min or max if bound exceeded.
if (gridSize > maxGridSize)
    gridSize = maxGridSize;
if (gridSize < minGridSize)
    gridSize = minGridSize;

let squareSize = (containerSize / gridSize);
containerSize = (squareSize * gridSize) * gridScale;   

root.style.setProperty('--div-width', squareSize + "px");
root.style.setProperty('--div-height', squareSize + "px");
root.style.setProperty('--container-height', containerSize + "px");
root.style.setProperty('--container-width', containerSize + "px");

for (let i = 0; i < (gridSize*gridSize); ++i)
{
    let gridSquare = document.createElement('div');
    container.appendChild(gridSquare);
    gridSquare.addEventListener("mouseover", e=>{
        gridSquare.classList.add('fill');
    });
}