const container = document.querySelector('.container');
createCells();

function submitInput() {
  createCells(100);
}

function addClass() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseenter', e=> {
      cell.style.backgroundColor='black';
    });
  });
}

function createCells(numCells=16) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = 'repeat('+numCells+',1fr)';
  container.style.gridTemplateRows = 'repeat('+numCells+',1fr)';
  for (var i=0; i<numCells**2; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    container.append(div);
  }
  addClass();
}
