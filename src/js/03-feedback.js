// fixed according to lection
import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state')) {
  formData = JSON.parse(localStorage.getItem('feedback-form-state'));
}

formRef.querySelector('[name="email"]').value = formData.email;
formRef.querySelector('[name="message"]').value = formData.message;

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  localStorage.clear();
  e.target.reset();
  formData.email = '';
  formData.message = '';
}

console.log(formData);

