const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  submit: document.querySelector('button'),
};

const INFO = 'feedback-form-state';
const inputEmail = refs.form.elements.email;
const inputMessage = refs.form.elements.message;

refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  const formData = {
    email: inputEmail.value,
    message: inputMessage.value,
  };
  localStorage.setItem(INFO, JSON.stringify(formData));
}

refs.submit.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (inputEmail.value === '' || inputMessage.value === '') {
    return alert('Будь-ласка заповніть всі поля форми!');
  }
  refs.form.reset();
  localStorage.removeItem(INFO);
}

function updateInput() {
  try {
    const localData = localStorage.getItem(INFO);
    const data = JSON.parse(localData);
    console.log(data);
    if (data) {
      inputEmail.value = data.email;
      inputMessage.value = data.message;
    }
  } catch (error) {
    console.log(error);
  }
}

updateInput();
