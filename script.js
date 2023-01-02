console.log('Script attached to HTML');

//Variables
const submitNumberOfGrid = document.getElementById('submitBtn');
const gridContainer = document.getElementById('gridContainer');
const defaultValue = 16;

// submitNumberOfGrid.addEventListener('click', function () {
//     const numOfGrid = document.querySelector('#fetchNumberOfGrid').value;
//     console.log(numOfGrid);
//     sketchBoard(numOfGrid);
// });

function sketchBoard(num) {
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for (let i = 0; i < num * num; i++) {
        const createDiv = document.createElement('div');
        createDiv.classList.add('grid-element');
        gridContainer.appendChild(createDiv);
    }
}

sketchBoard(16);
