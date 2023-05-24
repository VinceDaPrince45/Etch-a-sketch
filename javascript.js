const container = document.querySelector('.container');

function createGrid(num = 16) {
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.textContent = '';
        row.style.cssText = 'flex:auto; border: solid black; margin:-1px; padding:0; display:flex';
        container.appendChild(row);
        for (let i = 0; i < num; i++) {
            if (i == num - 1) {
                let column = document.createElement('div');
                column.textContent = '';
                column.style.cssText = 'flex:auto; margin: -1px; padding: 0';
                row.appendChild(column);
            } else {
                let column = document.createElement('div');
                column.textContent = '';
                column.style.cssText = 'flex:auto; border-right:solid black; margin: -1px; padding: 0';
                row.appendChild(column);
            }
        }
    }
}

createGrid();
container.style.cssText = 'display:flex; flex-direction:column; height:90vh';
