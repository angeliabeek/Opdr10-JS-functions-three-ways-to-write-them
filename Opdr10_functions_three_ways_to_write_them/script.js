// function declaration
function square1(number1, number2) {
    const sum1 = (number1 * number1) + (number2 * number2);
    const totalSum1 = sum1 * sum1;
    console.log(totalSum1);
}
square1(2, 3);
square1(5, 18);

// function expression
const square2 = function (number1, number2) {
    const sum2 = (number1 * number1) + (number2 * number2);
    const totalSum2 = sum2 * sum2;
    console.log(totalSum2);
};
square2(2, 3);
square2(5, 18);

// arrow function
const square3 = (number1, number2) => {
    const sum3 = (number1 * number1) + (number2 * number2);
    const totalSum3 = sum3 * sum3;
    console.log(totalSum3);
};
square3(2, 3);
square3(5, 18);