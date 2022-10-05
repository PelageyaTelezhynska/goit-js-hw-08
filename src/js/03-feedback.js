const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  submit: document.querySelector('button'),
};

const INFO = 'feedback-form-state';
const formData = {};
const inputEmail = refs.form.elements.email;
const inputMessage = refs.form.elements.message;

console.log(inputEmail);
refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  if (inputEmail === e.target) {
    formData.email = e.target.value;
  }

  if (inputMessage === e.target) {
    formData.message = e.target.value;
  }
  
  localStorage.setItem(INFO, JSON.stringify(formData));
}

refs.submit.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (inputEmail.value === '' || inputMessage.value === '') {
    return alert('Будь-ласка заповніть всі поля форми!')
  }
  refs.form.reset();
    localStorage.removeItem(INFO);
  console.log(formData);
  
}

function updateInput() {
  try {
    const localData = localStorage.getItem(INFO);
    const data = JSON.parse(localData);
      inputEmail.value = data.email;
      inputMessage.value = data.message;
  } catch (error) {
    console.log(error);
  } 
}

updateInput()
