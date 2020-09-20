const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employeeArray = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
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
inquirer.prompt(questions).then(function (data) {
  fs.writeFile("index.html", generate(data), function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
});
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
function createHtmlFile(html) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, html);
}

inquirer.prompt(questions);

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
