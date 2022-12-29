console.log('Script attached to HTML');

for (let i = 0; i < 15; i++) {
    console.log(i);
    let sketchBoard = document.createElement('div');
    sketchBoard.className = 'grid';
    document.querySelector('div').appendChild(sketchBoard);
}
