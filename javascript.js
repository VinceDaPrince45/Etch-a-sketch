const container = document.querySelector('#container');

function createGrid(num = 16) {
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.textContent = '';
        row.style.cssText = 'flex:auto; margin:-1px; padding:0; display:flex';
        row.classList.add('row');
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

container.style.cssText = 'display:flex; flex-direction:column; width: 40vw; height: 40vw; margin: 0 auto; border: solid black; position: absolute; top: 50%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);';

createGrid();

// when click on container, add event listener so that all cells change 
// color when mouse moves over them

// when mouse up , remove event listener from all cells

const cells = document.querySelectorAll('.cell');
let changeColor = false;

container.addEventListener('mousedown', () => {
    changeColor = true;
});

container.addEventListener('mouseup', () => {
    changeColor = false;
});

for (const cell of cells) {
    cell.addEventListener('mouseover', () => {
        if (changeColor) {
            cell.style.backgroundColor = 'black';
        }
    });
}

const btnClear = document.querySelector('.eraser');
btnClear.addEventListener('onclick', () => {

});
function clear() {
    
}