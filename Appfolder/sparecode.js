const questions = [
  { type: "input", name: "name", message: "What is your name?" },
  { type: "input", name: "id", Message: "What is your id number?" },
  { type: "input", name: "Email", message: "What is your Email?" },
  {
    type: "list",
    name: "roles",
    message: "What is your role?",
    choices: ["Engineer", "Manager", "Intern"],
  },
];
const engineerQuestion = [
  { type: "input", name: "Github", message: "what is your github account?" },
];
const managerQuestion = [
  {
    type: "input",
    name: "officenumber",
    message: "What is your office number?",
  },
];
const internQuestion = [
  { type: "input", name: "college", message: "What is your current college?" },
];

if (role === "Manager") {
  inquirer.prompt(managerQuestion);
} else if (role === "Engineer") {
  inquirer.prompt(engineerQuestion);
} else if (role === "Intern") {
  inquirer.prompt(internQuestion);
}
function askForNextEntry() {
  inquirer.prompt = [
    {
      type: "confirm",
      name: "addNewEmployee",
      message: "Do you wish to add another employee?",
      default: Boolean,
    },
  ];
  if (askForNextEntry === true) {
  } else {
  }
}

let employee = true;
while (employee) {}
const html = render(employeeArray);
//asking if they want to make a new employee
function newEmployee(employeeConfigObj) {
  const newEmployee = new Employee(employeeConfigObj);
  employeeArray.push(newEmployee);
  askForNextEntry();
  console.log(newEmployee);
}
function newEngineer(employeeConfigObj) {
  const newEngineer = new Engineer(employeeConfigObj);
  employeeArray.push(newEngineer);
  askForNextEntry();
  console.log(newEngineer);
}
function newIntern(employeeConfigObj) {
  const newIntern = new Intern(employeeConfigObj);
  employeeArray.push(newIntern);
  askForNextEntry();
  console.log(newIntern);
}
function newMananger(employeeConfigObj) {
  const newManager = new employeeConfigObj();
  employeeArray.push(newManager);
  askForNextEntry();
  console.log(newManager);
}
