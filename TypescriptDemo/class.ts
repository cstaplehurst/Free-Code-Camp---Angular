//Best practise is dont use * to import everything from a module, instead import only what is needed to avoid namespace pollution and improve code readability.
//Also dont use alias for the imported module, it can lead to confusion and make the code less readable.
import { User, Login } from "./interface";

//Example with default constructor and need for ! operator
//(! operator is used to tell the compiler that the property will be initialized later)
class OldEmployee {
  id!: number;
  name!: string;
  address!: string;
}

let dave = new OldEmployee();
dave.id = 1;
dave.name = "Dave Smith";
dave.address = "456 Main St";
console.log(dave);

interface address {
  street: string;
  city: string;
  state: string;
  pin: string;
}
//Example with parameterised constructor and no need for ! operator
//# is private field, it cannot be accessed outside the class.
//Prefer # instead of private keyword to declare private fields in TypeScript.
//This isn't true for Angular however!
class Employee implements Login {
  #id: number;
  protected name: string;
  address: address;

  static getEmployeeCount(): number {
    return 50;
  }

  //Getters and Setters for id property
  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  constructor(id: number, name: string, address: address) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }

  login(): User {
    return {
      name: this.name,
      id: this.#id,
      email: "",
    };
  }
}

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
  constructor(id: number, name: string, address: address) {
    super(id, name, address);
  }

  //Overriding the getNameWithAddress method of Employee class
  getNameWithAddress(): string {
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
