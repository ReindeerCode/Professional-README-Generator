// function to generate markdown for README
function generateMarkdown(answers) {
  return `
    # Project:
  ###${answers.name}

  ## Table of Contents:
  * [Name](#name)
  * [License](#license)
  * [Description](#description)
  * [Installation Instructions](#installationInstructions)
  * [Test](#test)
  * [GitHub](#gitHub)
  * [Email](#email)
  * [Contributors](#contributors)
  * 
  ## License:
  ###${answers.license}

  ## Description:
  ###${answers.description}

  ### Images:
  ![code refactor demo](./imagePathHere.png)

  ![code refactor demo](./imagePathHere.png)

  ![code refactor demo](./imagePathHere.png)

  ## Installation Instructions: 
  ###${answers.installationInstructions}

  ## Test Command: 
  ###${answers.test}

  ## My Github Username: 
  ###${answers.gitHub}

  ## My Email Address:
  ###${answers.email}
  
  ## Other Contributors:
  ###${answers.contributors}
`;
}

module.exports = generateMarkdown;
