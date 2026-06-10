//Angular documentation says not to use I as the prefix for interfaces, but I prefer to use it to easily identify interfaces in the code.
//Interfaces do not exist within js. Use classes instead of interfaces if you want to have a blueprint for objects that can be instantiated. Interfaces are only used for type checking and do not have any runtime presence in JavaScript.
export interface User {
  name: string;
  age?: number; // Optional property
  id: number;
  email: string;
}

//Object descructuring with aliasing
let { name: userName, email: userLogin }: User = {
  name: "John Doe",
  id: 1,
  email: "john.doe@example.com",
};
console.log(userName);
console.log(userLogin);

//Interface inheritance
interface Employees extends User {
  salary: number;
}

let employee: Employees = { name: "Jane Doe", id: 2, email: "", salary: 50000 };

//Export is needed to be used in other modules, otherwise it will give error "Cannot find name 'Login'".
export interface Login {
  login(): User;
}

//Array destructuring
let [user1, user2, ...restUsers]: User[] = [
  { name: "Alice", id: 1, email: "alice@example.com" },
  { name: "Bob", id: 2, email: "bob@example.com" },
  { name: "Charlie", id: 3, email: "charlie@example.com" },
  { name: "David", id: 4, email: "david@example.com" },
];
console.log(user1);
console.log(user2);
console.log(restUsers);

//Array filter function
let result = restUsers.filter((user) => user.id > 3);
console.log(result);
