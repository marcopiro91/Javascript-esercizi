// # Rest parameters and spread syntax

// The sum function has a high numbers of parameters. How can we improve the code in order to make it accept any amount of numbers to sum as its argument?



function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));