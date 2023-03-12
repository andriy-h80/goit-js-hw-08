import throttle from 'lodash.throttle';

// - заміна паттерна "Магічні числа та строки"
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form  input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onInputTextarea, 500));
refs.form.addEventListener('submit', onFormSubmit);

initInputTextarea();

function onInputTextarea(event) {
// - створюємо об'єкт з полями email і message
    formData = {
        email: refs.input.value.trim(),
        message: refs.textarea.value.trim(),
    };

// - якщо одне значення
// formData[event.target.name] = event.target.value.trim();

// - переводимо об'єкт в рядок
    const formDataJSON = JSON.stringify(formData);

// - зберігаємо у сховище
    localStorage.setItem(STORAGE_KEY, formDataJSON);

// - додаємо throttle (рядок 14)
};

function onFormSubmit(event) {
// - зупиняємо поведінку за замовчуванням
    event.preventDefault();

//  - виводимо в консоль об'єкт з полями email і message
   const { email, message } = event.currentTarget.elements;
   console.log({ email: email.value.trim(), message: message.value.trim() });

// - очищуємо форму
    event.currentTarget.reset();
    formData = {};

// - прибираємо значення зі сховища
    localStorage.removeItem(STORAGE_KEY);
};

function initInputTextarea() {
    try {
// - отримуємо значення зі сховища
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
// - якщо щось там було вже введено, поновлюємо
    if(savedData) {
    refs.input.value = savedData.email;
    refs.textarea.value = savedData.message;

//     Object.entries(savedData).forEach(([name, value]) => {
//       form.elements[name].value = value;
//     });

    };
    } catch (error) {
        return;
    }
};
