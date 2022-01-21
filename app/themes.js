const switcher = document.querySelector('.ball');
const body = document.querySelector('.main-wrapper');

switcher.addEventListener('click', () => {
  
  if (body.classList.contains('theme-1')) {
    body.classList.replace('theme-1', 'theme-2');
    switcher.style.left = '37%';

  } else if (body.classList.contains('theme-2')) {
    body.classList.replace('theme-2', 'theme-3');
    switcher.style.left = '72%';

  } else if (body.classList.contains('theme-3')) {
    body.classList.replace('theme-3', 'theme-1');
    switcher.style.left = '7%';
  }

});