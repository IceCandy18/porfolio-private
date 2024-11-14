const modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach((btn) => {
  btn.onclick = function open() {
    const modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'block';
  };
});

const closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach((btn) => {
  btn.onclick = function close() {
    (btn.closest('.modal').style.display = 'none');
  };
});

window.onclick = function winClose(e) {
  if (e.target.className === 'modal') {
    e.target.style.display = 'none';
  }
};
