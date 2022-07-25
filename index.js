// Import stylesheets
import './style.css';

//Create multiple functions
const makeDouble = (num) => num * num;
const addition5 = (num) => num + 5;
const subtract10 = (num) => num - 10;
const multiplyBy2 = (num) => num * 2;
const divisionBy10 = (num) => Math.floor(num / 10);

//declare a number
let num = 10;

// call multiple functions one by one
let double = makeDouble(num);
console.log(double); //100
let add5 = addition5(double); //100 + 5 = 105
let minus10 = subtract10(add5); //105 - 10 = 95
let mulx2 = multiplyBy2(minus10); //95 * 2 = 190
let final_res = divisionBy10(mulx2); // 190/10 = 19

console.log('Result by step by step function call: ', final_res);
// Result by step by step function call: 19

//Nested function calls
let final = divisionBy10(multiplyBy2(subtract10(addition5(makeDouble(num)))));
console.log('Result by Nesting functions: ', final);
// Result by Nesting functions: 19

// Implementing the 'pipe' function
// ********************************

const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((cv, cf) => cf(cv), val);

let pipe_final = pipe(
  makeDouble,
  addition5,
  subtract10,
  multiplyBy2,
  divisionBy10
)(num);

console.log('Result of piping: ', pipe_final);
// Result of piping: 19

// What’s The Compose?
// *************************

const pipe1 =
  (...fns) =>
  (val) =>
    fns.reduceRight((cv, cf) => cf(cv), val);

let final_compose = pipe1(
  divisionBy10,
  multiplyBy2,
  subtract10,
  addition5,
  makeDouble
)(num);

console.log('Result of Compose: ', final_compose);
// Result of Compose: 19
