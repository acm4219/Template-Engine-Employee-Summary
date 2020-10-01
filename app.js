const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

//possible prompt solution

function promptUser() {
  let allEmployees = [];
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        Message: "What is your id number?",
      },
      {
        type: "input",
        name: "Email",
        message: "What is your Email?",
      },
      {
        type: "input",
        name: "officenumber",
        message: "What is your office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.Email,
        answers.officenumber
      );
      allEmployees.push(manager);
      console.log(allEmployees);
      inquirer
        .prompt([
          {
            type: "input",
            name: "question",
            message:
              "Would you like add another team member? (Either Engineer or Intern)",
          },
        ])
        .then(function (answers) {
          if (answers === "Engineer") {
            inquire
              .prompt([
                {
                  type: "input",
                  name: "name",
                  message: "What is your name?",
                },
                {
                  type: "input",
                  name: "id",
                  Message: "What is your id number?",
                },
                {
                  type: "input",
                  name: "Email",
                  message: "What is your Email?",
                },
                {
                  type: "input",
                  name: "Github",
                  message: "what is your github account?",
                },
              ])
              .then((answers) => {
                const engineer = new Engineer(
                  answers.name.answers.id,
                  answers.email,
                  answers.github
                );
                allEmployees.push(engineer);
              });
          } else if (answers === "Intern") {
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "name",
                  message: "What is your name?",
                },
                {
                  type: "input",
                  name: "id",
                  Message: "What is your id number?",
                },
                {
                  type: "input",
                  name: "Email",
                  message: "What is your Email?",
                },
                {
                  type: "input",
                  name: "school",
                  message: "What is your current college?",
                },
              ])
              .then((answers) => {
                const intern = new Intern(
                  answers.name.answers.id,
                  answers.email,
                  answers.school
                );
                allEmployees.push(intern);
              });
          } //else {
          //   createHtmlFile();
          // }
        });
    });
}

function createHtmlFile(html) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, html);
}
promptUser();
//   function addTeamMember() {
//     inquire
//       .prompt([
//         {
//           type: "input",
//           name: "question",
//           message: "Would you like add another team member?",
//         },
//       ])
//       .then((answer) => {
//         if (answer.question === "Engineer") {
//           //call createEngineer Function()
//           function promptEngineer() {
//             inquirer
//               .prompt([
//                 {
//                   type: "input",
//                   name: "name",
//                   message: "What is your name?",
//                 },
//                 {
//                   type: "input",
//                   name: "id",
//                   Message: "What is your id number?",
//                 },
//                 {
//                   type: "input",
//                   name: "Email",
//                   message: "What is your Email?",
//                 },
//                 {
//                   type: "input",
//                   name: "Github",
//                   message: "what is your github account?",
//                 },
//               ])
//               .then((answers) => {
//                 const engineer = new Engineer(
//                   answers.name.answers.id,
//                   answers.email,
//                   answers.github
//                 );
//                 allEmployees.push(engineer);
//               });
//           }
//         } else if (answer.question === intern) {
//           function promptIntern() {
//             inquirer
//               .prompt([
//                 {
//                   type: "input",
//                   name: "name",
//                   message: "What is your name?",
//                 },
//                 {
//                   type: "input",
//                   name: "id",
//                   Message: "What is your id number?",
//                 },
//                 {
//                   type: "input",
//                   name: "Email",
//                   message: "What is your Email?",
//                 },
//                 {
//                   type: "input",
//                   name: "school",
//                   message: "What is your current college?",
//                 },
//               ])
//               .then((answers) => {
//                 const intern = new Intern(
//                   answers.name.answers.id,
//                   answers.email,
//                   answers.school
//                 );
//                 allEmployees.push(intern);
//               });
//           }
//         } else {
//
//         }
//         promptEngineer();
//         promptIntern();
//         createHtmlFile();
//       });
//   }
//   promptManager();
//   addTeamMember();
// }
// promptUser();

// function init() {}

// init();

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
// for the provided `render` function to work!
