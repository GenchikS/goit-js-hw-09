const LS_KEY = "feedback-form-state";
let formData = { email: "", message: "" };
// localStorage.setItem(LS_KEY, JSON.stringify(formData))  //  створення ключа в LS

// const dataInput = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};  //  отримання ключа
// console.log(`dataInput`, dataInput);  //  виведення ключа


const form = document.querySelector(".feedback-form");

form.addEventListener("submit", inputForm);

function inputForm(event) {
    event.preventDefault();
    const { email, message } = event.currentTarget.elements;
    formData.email = email.value;
    formData.message = message.value;
    console.log(`emailUser`, formData.email);
    console.log(`messagelUser`, formData.message);
    formData = {
        email: formData.email,
        message: formData.message
    };
    console.log("formData", formData);
}



// const inputEmailUser = document.querySelector(".input-email");

// inputEmailUser.addEventListener(`input`, inputEmail);

// function inputEmail(event) {
//     formData.email = event.currentTarget.value;
//     localStorage.setItem(LS_KEY, JSON.stringify(formData))  //  створення ключа в LS email
    
// }

// const inputMassageUser = document.querySelector(".input-massage");
// inputMassageUser.addEventListener(`input`, inputMassage);

// function inputMassage(event) {
//     formData.message = event.currentTarget.value;
//     localStorage.setItem(LS_KEY, JSON.stringify(formData))  //  створення ключа в LS для message
// }

// const button = document.querySelector("button");
// console.log(`button`,button)
// button.addEventListener(`submit`, buttonSubmit);

// function buttonSubmit() {
//     console.log(`button`, button);
//     // const dataInput = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};
//     // console.log(`dataInput`, dataInput);
//     // if (event.currentTarget.value.trim() === "") {
//     //     alert("Fill please all fields");
//     // }
//     const dataInput = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};  //  отримання ключа
//     console.log(`dataInput`, dataInput);  //  виведення ключа
//     formData.clear();
// }

// const dataInput = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};  //  отримання ключа
// console.log(`dataInput`, dataInput);  //  виведення ключа







