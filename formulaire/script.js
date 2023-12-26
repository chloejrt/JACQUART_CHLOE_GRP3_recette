"use strict";

let email = document.getElementById("email");
let password = document.getElementById("password");
let button_form = document.getElementById("bouton");


function login(){
    console.log(`Mail: ${email.value}\nMot de passe: ${password.value}`);
}

function checkPassword() {
    let passwordError = document.getElementById('mdpError');

    // Expression régulière pour vérifier la présence d'au moins une majuscule, une minuscule et un caractère spécial
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

    if(passwordRegex.test(password.value) && password.value.length >= 8) {
        passwordError.textContent = ''; // Le mot de passe est valide
        button_form.disabled = false;
    }else{
        passwordError.textContent ='Votre mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial.';
        button_form.disabled = true;
    }
}
password.addEventListener('input', checkPassword);