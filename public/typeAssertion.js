"use strict";
const firstname = document.getElementById('firstname');
const age = document.getElementById('age');
console.log(typeof age.value);
const form = document.getElementById('signupForm');
const gender = document.getElementById('genre');
//Validation
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(firstname.value, age.valueAsNumber, gender.value);
});
