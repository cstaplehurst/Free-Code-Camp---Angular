"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Object descructuring with aliasing
let { name: userName, email: userLogin } = {
    name: "John Doe",
    id: 1,
    email: "john.doe@example.com",
};
console.log(userName);
console.log(userLogin);
let employee = { name: "Jane Doe", id: 2, email: "", salary: 50000 };
//Array destructuring
let [user1, user2, ...restUsers] = [
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
//# sourceMappingURL=interface.js.map