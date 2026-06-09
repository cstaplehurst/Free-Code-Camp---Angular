"use strict";
//string
var lname;
lname = "Staplehurst";
var newname = lname.toUpperCase();
console.log(newname);
//number
var age;
age = 25;
age = 25.5;
var dob = "25";
var result = parseInt(dob);
console.log(result);
//boolean
var isValid = false;
console.log(isValid);
//array
var empList;
empList = ["John", "Jane", "Doe"];
var numList; //Same as number[]
numList = [1, 2, 3, 4, 5];
var results = numList.filter(function (num) { return num > 2; });
console.log(results);
var num = numList.find(function (num) { return num === 2; });
console.log(num);
var emp = empList.find(function (emp) { return emp === "Jane"; });
console.log(emp);
var sum = numList.reduce(function (acc, curr) { return acc + curr; }, 0);
console.log(sum);
var c = 1 /* Green */;
console.log(c);
//tuple
//difference between tuple and array is that array wont fail at compile if you access outside of bounds,
// but tuple will fail at compile time if you access outside of bounds
var swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums);
//any
//DO NOT USE ANY
var department;
department = "IT";
console.log(department);
department = 123;
console.log(department);
