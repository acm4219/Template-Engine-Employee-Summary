// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const baseTemplate = require("./Employee");

class Engineer {
  constructor(baseTemplate, role) {
    this.baseTemplate = baseTemplate;
    this.role = "Engineer";
  }
  getbaseTemplate() {
    return `${this.baseTemplate}`;
  }
  getRole() {
    return `${this.role}`;
  }
}

baseTemplate();
