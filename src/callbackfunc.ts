function gift(age: number,sum: (arg: string) => void) {
    const numberAge = age + 3
    sum(numberAge.toString())
}

gift(40, (num) => {
    console.log(num)
})