//import external data
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
//end imports

// array of questions for user
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your project's name?",
  },
  {
    type: "list",
    name: "license",
    message: "Apply License Badge?",
    choices: [
      new inquirer.Separator(),
      "MIT",
      new inquirer.Separator(),
      "GPLv3",
      new inquirer.Separator(),
      "AGPL",
      new inquirer.Separator(),
    ],
  },
  {
    type: "input",
    name: "description",
    message: "Briefly, describe your project.",
  },

  {
    type: "input",
    name: "installationInstructions",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "test",
    message: "What is the command to test the project?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What's your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this project?",
  },
];
// end array of questions for user

// function to generate readMe
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(
      "Example_ReadMe.md",
      generateMarkdown({
        ...answers,
      })
    );
  });
}
//end function to generate Readme

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// end function to write README file

// function call to initialize program
init();
// end function call to initialize program
