//Variables
const defaultValue = 16;
const gridContainer = document.getElementById('gridContainer');
const pickColor = document.getElementById('pickAColor');
const gridSize = document.getElementById('sizeOfGrid');
const sizeNumber = document.getElementById('numberOfGridSize');

// displaying the sketching board
function sketchBoard(num) {
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for (let i = 0; i < num * num; i++) {
        const createDiv = document.createElement('div');
        createDiv.classList.add('grid-element');
        gridContainer.appendChild(createDiv);
    }
}

// painting the divs while the mouse goes through the grid container and the children elements
gridContainer.addEventListener('mousemove', function (e) {
    // console.log(e.target, 'event happening');
    e.target.style.backgroundColor = 'steelblue';
});

// change color from the
function changeColor() {}

sketchBoard(defaultValue);

// Changing label of the number of grid
function changeSizeNumber(size) {
    sizeNumber.innerHTML = `${size} x ${size}`;
}

// Update size the grid sketch
function updateGridSize() {
    const returnGridSizeValue = gridSize.value;
    sketchBoard(returnGridSizeValue);
    changeSizeNumber(returnGridSizeValue);
    setupContainer(returnGridSizeValue);
}
// Erase the element painted on the canvas
function eraseGridCanvas() {
    gridContainer.innerHTML = '';
}

// Setup container
function setupContainer(value) {
    eraseGridCanvas();
    sketchBoard(value);
}

// Changing the size of the grid canvas + the label that is represented by the range input
gridSize.addEventListener('click', updateGridSize);
