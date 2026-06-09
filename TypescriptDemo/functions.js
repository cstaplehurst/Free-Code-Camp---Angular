"use strict";
// Named Function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
// Error Function
var sub = function (num1, num2) { return num1 - num2; };
console.log(sub(5, 2));
// Function Expression
var mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(3, 4));
// Optional Parameters
function add2(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add2(2, 3));
console.log(add2(2, 3, 4));
// Required Parameters
function add3(num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    return num1 + num2 + num3;
}
console.log(add3(2, 3));
console.log(add3(2, 3, 4));
// REST Parameters
// ... is the rest operator, it allows us to pass an arbitrary number of arguments to a function and it will be treated as an array
function add4(num1) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    return num1 + nums.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(add4(2, 3, 4, 5, 6, 7, 8, 9, 10));
