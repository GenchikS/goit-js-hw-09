const LS_KEY = "feedback-form-state";
let formData = { email: "", message: "" };

const dataOutput = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};  //  отримання розпарсеного ключа

const form = document.querySelector(".feedback-form");

if (formData.email === "" && formData.message === "") {
    document.querySelector(".input-email").value = dataOutput.email;
    document.querySelector(".input-message").value = dataOutput.message
    }

form.addEventListener("submit", submitForm);
form.addEventListener(`input`, inputEmail);

function inputEmail(event) {
    const { email, message } = event.currentTarget.elements;
    formData.email = (email.value).trim();
    formData.message = (message.value).trim();
    // console.log(`emailUser`, formData.email);  //  перевірка введення email
    // console.log(`messagelUser`, formData.message);  //  перевірка введення message
        formData = {
            email: formData.email,
            message: formData.message
    };
    localStorage.setItem(LS_KEY, JSON.stringify(formData))  //  створення ключа в LS};
}

function submitForm(event) {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert(`Fill please all fields`);
    } else {
        console.log("formData", formData);  //  перевірка об'єкту
        form.reset();  //  очищення форми
        localStorage.clear();  //  очищення localStorage
        formData = { email: "", message: "" };
    };
}


