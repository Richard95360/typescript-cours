"use strict";
const form = document.getElementById('signupForm');
const firstName = document.getElementById('firstname');
const age = document.getElementById('age');
function gift(age) {
    return age + 3;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (+age.value < 18) {
        console.log('inscription refusé');
    }
    else {
        console.log(`Binevnue ${firstName.value}.
        vous avez ${age.value}.
        vous aure droit à un cadeau quand vous aurez ${gift(+age.value)}
        `);
    }
});
