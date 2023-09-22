const firstname = document.getElementById('firstname') as HTMLInputElement;

const age = document.getElementById('age') as HTMLInputElement;

console.log(typeof age.value)

const form = document.getElementById('signupForm') as HTMLFormElement
const gender = document.getElementById('genre') as HTMLSelectElement

//Validation
form.addEventListener('submit', (e:Event) => {
   e.preventDefault();
   console.log(firstname.value, age.valueAsNumber,gender.value)

   
})