//string
let lname: string;
lname = "Staplehurst";
let newname: string = lname.toUpperCase();
console.log(newname);

//number
let age: number;
age = 25;
age = 25.5;
let dob: string = "25";
let result: number = parseInt(dob);
console.log(result);

//boolean
let isValid: boolean = false;
console.log(isValid);

//array
let empList: string[];
empList = ["John", "Jane", "Doe"];
let numList: Array<number>; //Same as number[]
numList = [1, 2, 3, 4, 5];
let results: number[] = numList.filter((num) => num > 2);
console.log(results);
let num: number | undefined = numList.find((num) => num === 2);
console.log(num);
let emp: string | undefined = empList.find((emp) => emp === "Jane");
console.log(emp);
let sum = numList.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//enum
//const important, without this its a function and will be included in the output js file,
// with const its just a number
const enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

//tuple
//difference between tuple and array is that array wont fail at compile if you access outside of bounds,
// but tuple will fail at compile time if you access outside of bounds
let swapNums: [number, number];
function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums);

//any
//DO NOT USE ANY
let department: any;
department = "IT";
console.log(department);
department = 123;
console.log(department);
