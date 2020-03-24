/*
Use grid-template
- default is 16x16
- create div, add div, for n-times (min: 16)
- on hover, cell should change to a different color (use rgb)
*/
const container = document.querySelector('.container');
console.log('here');
createCells(addClass);

function addClass() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseenter', e=> {
      cell.style.backgroundColor='black';
    });
  });
}

function createCells(callback, numCells=16) {
  for (var i=0; i<numCells; i++) {
    for (var j=0; j<numCells; j++) {
      const div = document.createElement('div');
      div.classList.add('cell');
      container.append(div);
    }
  }
  callback();
}
