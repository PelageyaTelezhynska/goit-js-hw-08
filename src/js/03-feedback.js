const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('[name="email"]'),
};

const inputData = 'feedback-form-state';
refs.form.addEventListener('input', throttle(onInput), 500);

function onInput(e) {
    // localStorage.setItem(inputData, JSON.stringify({ inputEmail: refs.email.value, })
}
