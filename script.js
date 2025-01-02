// Random Number Generator

const button = document.getElementById("button");
const output = document.getElementById("output");
const min = 1;
const max = 10;
let RandomNumber;

button.onclick = function() {
    RandomNumber = Math.floor(Math.random() * max) + min;
    output.textContent = RandomNumber;
}


// if you want to make it with 3 output

// const button = document.getElementById("button");
// const output1 = document.getElementById("output1");
// const output2 = document.getElementById("output2");
// const output3 = document.getElementById("output3");
// const min = 1;
// const max = 10;
// let RandomNumber1;
// let RandomNumber2;
// let RandomNumber3;

// button.onclick = function() {
//     RandomNumber1 = Math.floor(Math.random() * max) + min;
//     RandomNumber2 = Math.floor(Math.random() * max) + min;
//     RandomNumber3 = Math.floor(Math.random() * max) + min;
//     output1.textContent = RandomNumber;
//     output2.textContent = RandomNumber;
//     output3.textContent = RandomNumber;
// }
