// fixed according to lection
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state')) {
  formData = JSON.parse(localStorage.getItem('feedback-form-state'));
}

form.querySelector('[name="email"]').value = formData.email;
form.querySelector('[name="message"]').value = formData.message;

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

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

// const formEl = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('[name="email"]');
// const messageEl = document.querySelector('[name="message"]');

// const FEEDBACK_FORM_KEY = 'feedback-form-state';
// const formData = {};
// const textInStorage = localStorage.getItem(FEEDBACK_FORM_KEY);

// emailEl.addEventListener('input', throttle(onTextInput, 500));
// messageEl.addEventListener('input', throttle(onTextInput, 500));
// formEl.addEventListener('submit', onFormSubmit);

// if (textInStorage) {
//   savedText();
// }

// function onTextInput(event) {
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
// }

// function savedText() {
//   const textObject = JSON.parse(textInStorage);

//   if (Object.keys(textObject).includes('email')) {
//     emailEl.value = textObject.email;
//   }
//   if (Object.keys(textObject).includes('message')) {
//     messageEl.value = textObject.message;
//   }
// }

// function onFormSubmit(event) {
//   event.preventDefault();
//   const informOfForm = {
//     email: emailEl.value,
//     message: messageEl.value,
//   };
//   if (emailEl.value === '' || messageEl.value === '') {
//     alert('Please fill in all the fields!');
//   } else {
//     console.log(informOfForm);
//     localStorage.removeItem(FEEDBACK_FORM_KEY);
//     event.currentTarget.reset();
//   }
// }

