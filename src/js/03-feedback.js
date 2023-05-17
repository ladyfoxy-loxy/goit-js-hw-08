import {throttle} from 'lodash';

const inputForm = document.querySelector(".feedback-form");
const emailForm = document.querySelector("input");
const messageForm = document.querySelector("textarea");
const STORAGE_KEY = "feedback-form-state";
let dataObject = JSON.parse(localStorage.getItem(STORAGE_KEY));

inputForm.addEventListener ('input', throttle(onFormInput, 500));
inputForm.addEventListener ('submit', submitForm);

addingToForm();

function addingToForm() {
    if (dataObject) {
    emailForm.value = dataObject.email;
    messageForm.value = dataObject.message;
    }
}

function onFormInput () {
    dataObject = {
        email: emailForm.value,
        message: messageForm.value,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObject));

}

function submitForm (event) {
    event.preventDefault();
    console.log(dataObject);
    localStorage.removeItem(STORAGE_KEY);
    inputForm.reset();
    dataObject={};
}
 

