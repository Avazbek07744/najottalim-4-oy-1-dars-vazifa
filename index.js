//! 1-misol

// let number = +prompt("Son kiriting ...");

// let quote = Math.floor(number / 2);

// let resoult = number % 2;

// console.log("Butun qismi:", quote);
// console.log("Qoldiq:", resoult);

//! 2-misol

// let num1 = +prompt("Son kiriting ...");
// let num2 = +prompt("Son kiriting ...");

// if (num1 > num2) {
//     console.log(num1 * num2)
// }
// else if (num1 < num2) {
//     console.log(num1 + num2)
// }

// else {
//     console.log(num1 - num2)
// }

//! 3-misol

// let number = +prompt("Son kiriting ...");
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//   factorial *= i; 
// }

// console.log("Faktorial:", factorial);

//! 4-misol

// let number1 = +prompt("Son kiriting ...");
// let number2 = +prompt("Son kiriting ...");
// let number3 = +prompt("Son kiriting ...");

// let resoult = number1 * number1 + number2 * number2 + number3 * number3;

// console.log("Kvadratlar yig'indisi:", resoult); 


//! 5-misol

// let num = +prompt("Son kiriting ...");
// let daraja = +prompt("Son kiriting ...");
// let result = 1;

// for (let i = 0; i < daraja; i++) {
//     result *= num;
// }

// console.log(result);

//! 7-misol

// let number = +prompt("Son kiriting ...");
// let epsilon = 0.00001;
// let guess = number / 3;

// while (Math.abs(guess * guess * guess - number) >= epsilon) {
//   guess = (2 * guess + number / (guess * guess)) / 3;
// }

// console.log(number + " ning uchinchi darajali ildizi:", guess);

let nums = +prompt("Son kiriting ...")

let result = Math.cbrt(nums);

console.log(`Berilgan sonning kub ildizi: ${result}`);
