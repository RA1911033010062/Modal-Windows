'use strict';
const closemodalbtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openmodalbtn = document.querySelectorAll('.show-modal');
console.log(openmodalbtn);
for (let i = 0; i < openmodalbtn.length; i++)
  openmodalbtn[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
const closeit = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closemodalbtn.addEventListener('click', closeit);
overlay.addEventListener('click', closeit);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) closeit();
  }
});
