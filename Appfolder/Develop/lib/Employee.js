// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  getName() {
    return `${this.name} is my name`;
  }
  getId() {
    return `${this.id} is my id`;
  }
  getEmail() {
    return `${this.email} is my email`;
  }
  getRole() {
    return `${this.role} is my role`;
  }
}

const employeeOne = new Employee(
  "Roger",
  "2",
  "Rogeremail@email.com",
  this.role
);

console.log(employeeOne);
