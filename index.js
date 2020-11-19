//import external data
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown";
//end imports


//  });

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

// array of answers
  .then((answers) => {
    console.log(answers);
//end array of answers


inquirer.prompt(questions);

// function to write README file
function writeToFile(fileName, data) {}
// end function to write README file

// function to initialize program
function init() {}
// end function to initialize program

// function call to initialize program
init();
// end function call to initialize program

// License Badges
// [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
// [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
// [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
