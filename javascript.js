const container = document.querySelector('.container');

function createGrid(num = 16) {
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.textContent = '';
        row.style.cssText = 'flex:auto; border: solid black; margin:-1px; padding:0';
        container.appendChild(row);
    }
}

createGrid();
container.style.cssText = 'display:flex; flex-direction:column; height:90vh';   
