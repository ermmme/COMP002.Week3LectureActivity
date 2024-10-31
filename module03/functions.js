//1st method for creating a function
const printHelloWorld = function () {
  console.log("printHelloWorld() called!");
  console.log("Hello");
  console.log("World!");
};
printHelloWorld();

//2nd method to create a function
function printHelloWorld2() {
  console.log("printHelloWorld2() called!");
}
printHelloWorld2();

//3rd method to create a function
const printHelloWorld3 = () => {
  console.log("printHelloWorld3() called!");
};
printHelloWorld3();

/***************************************************/
//function with parameters
function printHelloWorld4(name) {
  console.log("Hello, " + name);
}
printHelloWorld4("xXSwagXx");
printHelloWorld4("xXSwagGamerXx");
printHelloWorld4("xXSwagSniperXx");
printHelloWorld4("xXSwagWarriorXx");

//function with multiple parameters
function printHelloWorld5(name1, name2, name3, name4, name5) {
  console.log(`Hello, ${name1}, ${name2}, ${name3}, ${name4}, and ${name5}`); // string interpolation example
}

printHelloWorld5("Matthew", "Bob", "Eric", "Chris", "Alyssa");

// string output options (single-quotes, double-quotes, and backticks)
let someVariable = "test";
console.log("hello, " + someVariable); // single-quotes
console.log("hello, " + someVariable); // double-quotes
console.log(`hello, ${someVariable}`); // backticks with string interpolation

/***************************************************/
//function calling a function
function printHelloWorld6() {
  console.log("This is printHelloWorld6()");
}
function printHelloWorld7() {
  console.log("This is printHelloWorld7()");
  printHelloWorld6(); // calling a function inside another function
}
printHelloWorld7(); // prints both "This is printHelloWorld7()" & "This is printHelloWorld6()"
printHelloWorld6(); // print "This is printHelloWorld6()"

/***************************************************/
// recursion
const factorial = (n) => {
  if (n <= 1) {
    return 1; // the "base case"
  }
  return n * factorial(n - 1); // recursive call
};
console.log(factorial(5));

/***************************************************/
// no return vs return value functions

// function without a return value
function sum(num1, num2) {
  console.log(num1 + num2); // prints the sum of num1 & num2
}
// function with a return value
function difference(num1, num2) {
  return num1 - num2; // returns the difference between num1 & num2 BUT it does not print it
}
sum(2, 10);
let addTenToDifference = difference(10, 5) + 10;
console.log(addTenToDifference);
