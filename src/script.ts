
const form = document.getElementById('signupForm') as HTMLFormElement
const firstName = document.getElementById('firstname') as HTMLInputElement
const age = document.getElementById('age') as HTMLInputElement

function gift (age:number) {
   return age + 3
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    if(+age.value <  18){
        console.log('inscription refusé')
    }else {
        console.log(`Binevnue ${firstName.value}.
        vous avez ${age.value}.
        vous aure droit à un cadeau quand vous aurez ${gift(+age.value)}
        `)
    }
})