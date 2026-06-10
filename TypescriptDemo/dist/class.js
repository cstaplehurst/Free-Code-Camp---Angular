"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
//Example with default constructor and need for ! operator
//(! operator is used to tell the compiler that the property will be initialized later)
class OldEmployee {
}
let dave = new OldEmployee();
dave.id = 1;
dave.name = "Dave Smith";
dave.address = "456 Main St";
console.log(dave);
//Example with parameterised constructor and no need for ! operator
//# is private field, it cannot be accessed outside the class.
//Prefer # instead of private keyword to declare private fields in TypeScript.
//This isn't true for Angular however!
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    static getEmployeeCount() {
        return 50;
    }
    //Getters and Setters for id property
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
    login() {
        return {
            name: this.name,
            id: __classPrivateFieldGet(this, _Employee_id, "f"),
            email: "",
        };
    }
}
_Employee_id = new WeakMap();
let john = new Employee(2, "John Doe", {
    street: "123 Main St",
    city: "Some City",
    state: "Some State",
    pin: "12345",
});
console.log(john);
console.log(john.getNameWithAddress());
//Example of inheritance
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    //Overriding the getNameWithAddress method of Employee class
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let mike = new Manager(3, "Mike", {
    street: "Cherise Drive",
    city: "Some City",
    state: "Some State",
    pin: "12345",
});
console.log(mike);
console.log(mike.getNameWithAddress());
console.log(Employee.getEmployeeCount());
john.empId = 100;
console.log(john.empId);
//# sourceMappingURL=class.js.map