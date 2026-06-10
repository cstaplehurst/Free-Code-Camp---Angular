"use strict";
//string
let lname;
lname = "Staplehurst";
let newname = lname.toUpperCase();
console.log(newname);
//number
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
console.log(result);
//boolean
let isValid = false;
console.log(isValid);
//array
let empList;
empList = ["John", "Jane", "Doe"];
let numList; //Same as number[]
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
console.log(results);
let num = numList.find((num) => num === 2);
console.log(num);
let emp = empList.find((emp) => emp === "Jane");
console.log(emp);
let sum = numList.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
let c = 1 /* Green */;
console.log(c);
//tuple
//difference between tuple and array is that array wont fail at compile if you access outside of bounds,
// but tuple will fail at compile time if you access outside of bounds
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums);
//any
//DO NOT USE ANY
let department;
department = "IT";
console.log(department);
department = 123;
console.log(department);
//# sourceMappingURL=datatypes.js.map