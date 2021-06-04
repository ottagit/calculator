// Create functions to mimic basic math operations
// addition, multiplication, division and subtraction
// All parameters are function-scoped -> their visibilty is limited within the functions

// Addition
function add(a,b) {
  return a + b;
}

// Subtraction
function subtract(a,b) {
  return a - b;
}

// Multiplication
function multiply(a,b) {
  return a * b;
}

// Division
function divide(a,b) {
  return a / b;
}

/* Create a new function operate that takes an operator
   and 2 numbers and then calls one of the above
   functions on the numbers
*/
function operate(operator, num1, num2) {
  return operator(num1, num2);
}

// Implement multiply on the operate function
let product = operate(multiply, 30, 2);
console.log(product);

// Implement add on the operate function
let sum = operate(add, 30, 2);
console.log(sum);

// Implement subtract on the operate function
let diff = operate(subtract, 30, 2);
console.log(diff);

// Implement divide on the operate function
let div = operate(divide, 30, 2);
console.log(div);
