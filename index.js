import inquirer from "inquirer";
import fs from "fs";
import util from "util";

// inquirer
//   .prompt(questions)
//   .then((answers) => {
//     console.log(answers);
//   });

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "Description",
    message: "What is your project description.",
  },
  {
    type: "list",
    name: "License",
    message: "Apply License Badge?",
    choices: [
      "MIT",
      new inquirer.Separator(),
      "GPL v3",
      new inquirer.Separator(),
      "AGPL",
      new inquirer.Separator(),
      "No License Yet",
    ],
  },
  {
    type: "input",
    name: "Installation Instructions",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "Usage Information",
    message: "Provide usage information for the user.",
  },
  {
    type: "input",
    name: "Usage Information",
    message: "Provide usage information for the user.",
  },
  {
    type: "input",
    name: "Usage Information",
    message: "Provide usage information for the user.",
  },
  {
    type: "input",
    name: "Contribution Guidelines",
    message: "Outline the contribution guidelines.",
  },
  {
    type: "input",
    name: "Test Instructions",
    message: "Outline the contribution guidelines.",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
