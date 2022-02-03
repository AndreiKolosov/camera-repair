'use strict';

const form = document.querySelectorAll('.form');
const formSubmitButton = document.querySelectorAll('.form__button');
const headerInput = document.querySelector('#header-form-input');
const footerInput = document.querySelector('#footer-form-input');

function formSubmit(evt) {
  evt.preventDefault();

  formSubmitButton.forEach((element) => {
    element.classList.add('form__button_active');
  });
}

headerInput.oninput = () => {
  footerInput.value = headerInput.value;
};

footerInput.oninput = () => {
  headerInput.value = footerInput.value;
};

form.forEach((element) => {
  element.addEventListener('submit', formSubmit);
});
