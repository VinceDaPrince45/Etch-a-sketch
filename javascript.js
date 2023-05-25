const container = document.querySelector('#container');

function createGrid(num = 16) {
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.textContent = '';
        row.style.cssText = 'flex:auto; margin:-1px; padding:0; display:flex';
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
                column.style.cssText = 'flex:auto; margin: -1px; padding: 0';
                column.classList.add('cell');
                row.appendChild(column);
            }
        }
    }
}

function color() {

}

container.style.cssText = 'display:flex; flex-direction:column; width: 40vw; height: 40vw; margin: 0 auto; border: solid black';

createGrid();

const cells = document.querySelectorAll('.cell');
for (const cell of cells) {
    container.addEventListener('mousedown', () => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    });   
}

