'use strict';

const modal = document.querySelector('.modal'); //var used in place of const due to block scope variable error
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('close-modal');
//const btnsOpenModal = document.querySelector('.show-modal'); //only 1st gets selected not all with this class
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden'); //no . before hidden as we are not selecting anything
  overlay.classList.remove('hidden');
  //modal.style.display= 'block'; can be done in place of above but difficult
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//if used to sort the null error shown

if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal); //doesnt work??? why???

if (overlay) overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key == 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
