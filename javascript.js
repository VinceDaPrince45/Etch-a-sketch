const container = document.querySelector('#container');

function createGrid(num = 16) {
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.textContent = '';
        row.style.cssText = 'flex:auto; border: solid black; margin:-1px; padding:0; display:flex';
        container.appendChild(row);
        for (let j = 0; j < num; j++) {
            if (j == num - 1) {
                let column = document.createElement('div');
                column.textContent = '';
                column.style.cssText = 'flex:auto; margin: -1px; padding: 0';
                column.classList.add('cell');
                row.appendChild(column);
            } else {
                let column = document.createElement('div');
                column.textContent = '';
                column.style.cssText = 'flex:auto; border-right:solid black; margin: -1px; padding: 0';
                column.classList.add('cell');
                row.appendChild(column);
            }
        }
    }
}

container.style.cssText = 'display:flex; flex-direction:column; width: 40vw; height: 40vw; margin: 0 auto';

createGrid();

const cells = document.querySelectorAll('.cell');
for (const cell of cells) {
    cell.addEventListener('mouseenter', () => {
        console.log('hi')
        cell.style.backgroundColor = 'black';
    });   
}

