import inquirer from "inquirer";
// import fs from "fs";
// import generateMarkdown from "./utils/generateMarkdown";

inquirer
  .prompt(questions)
//   .then((answers) => {
//     console.log(answers);
  });

  
// array of questions for user
const questions = [
  {
    type: "input",
    name: "Name",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "Description",
    message: "Briefly, describe your project.",
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
    name: "Test",
    message: "What is the command to test the project?",
  },
  {
    type: "input",
    name: "GitHub",
    message: "What's your GitHub username?",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "Contributors",
    message: "Who are the contributors of this project?",
  },
];


// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
