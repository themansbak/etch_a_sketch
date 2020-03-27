/*
Modify on hover to - the cell color by 10%;
*/
const container = document.querySelector('.container');
const resizeButton = document.querySelector('#resize-button');
const promptButton = document.querySelector('#prompt-button');
const input = document.querySelector('#resize-input');
createCells();

input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') submitInput(input.value);
});
resizeButton.addEventListener('click', () => {
  submitInput(input.value);
});

function popupInput() {
  const size = prompt('Enter a number between 1-100', '16');
  if (size < 1 || size > 100) popupInput();
  else createCells(size);
}
function submitInput(size) {
  if (size < 1 || size > 100) alert('Enter a number between 1-100');
  else createCells(size);
  return;
}
function stringifyHSL(h, s, l) {
  return 'hsl('+h+','+s+'%,'+l+'%)';
}
function stringifyRGB(r, g, b) {
  return 'rgb('+r+','+g+','+b+')';
}
function addClass() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseenter', e=> {
      var cellColor = cell.style.backgroundColor;
      if (!cellColor) {
        cell.style.backgroundColor = stringifyRGB(Math.ceil(Math.random()*255),
            Math.ceil(Math.random()*255), Math.ceil(Math.random()*255));
      } else {
        let color = cellColor.slice(4,-1).split(/[\s,]+/),
          r = color[0],
          g = color[1]
          b = color[2];
        const shadeFactor = 0.2;
        r = r * (1-shadeFactor);
        g = g * (1-shadeFactor);
        b = b * (1-shadeFactor);
        cell.style.backgroundColor = stringifyRGB(r,g,b);
      }
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
