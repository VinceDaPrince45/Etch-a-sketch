const container = document.querySelector('.container');

function createGrid(num = 16) {
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.textContent = '';
        row.style.cssText = 'padding:5px; margin:0; border: solid black';
        container.appendChild(row);
    }
}

createGrid();
container.style.cssText = 'display:flex;';   
