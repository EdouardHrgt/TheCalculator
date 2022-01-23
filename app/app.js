const screen = document.querySelector('.displayer p');
const btns = document.querySelectorAll('.btn-content');
const btnsWrapper = document.querySelectorAll('.small-btns');

const deleteBtn = document.querySelector('.delete-btn');
const reset = document.querySelector('#reset');
const total = document.querySelector('#total');

// Print btn value on screen
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    screen.textContent += btn.textContent;
  });
});

//Delete last screen value
deleteBtn.addEventListener('click', () => {
  const del = screen.textContent.replace(/.$/, '');
  screen.textContent = del;
});

// Reset tout le screen
reset.addEventListener('click', () => {
  screen.textContent = '';
});

// Launch Total
total.addEventListener('click', doTheMaths);

function doTheMaths() {
  const result = eval(screen.textContent);
  screen.textContent = result;
}
