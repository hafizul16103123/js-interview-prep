/**
 * undefined
 * 10
 */

// console.log(a);
// var a = 10;
// console.log(a);

//************************************************************************** */

/**
 * ReferenceError: Cannot access 'a' before initialization
 * let/const  has a temporal dead zone so it through reference error
 */
// console.log(a);
// let a = 10;
// console.log(a);

//************************************************************************** */
/**
 * second
 * first
 * first
 */
// myFunc();
// var myFunc = function () {
//   console.log("first");
// };

// myFunc();

// function myFunc() {
//   console.log("second");
// }
// myFunc();

//************************************************************************** */
/**
 * ReferenceError: localA is not defined
 */

// var globalA = 100;
// (() => {
//   var localA = 100;
//   console.log(globalA);
//   console.log(localA);
// })();

// console.log(globalA); // Reference error
// console.log(localA);
