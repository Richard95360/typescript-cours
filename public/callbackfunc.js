"use strict";
function gift(age, sum) {
    const numberAge = age + 3;
    sum(numberAge.toString());
}
gift(40, (num) => {
    console.log(num);
});
