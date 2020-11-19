// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # Project:
    ### ${answers.name}

  ## Table of Contents:
      * [Name](#name)
      * [License](#license)
      * [Description](#description)
      * [Installation Instructions](#installationInstructions)
      * [Test](#test)
      * [GitHub](#gitHub)
      * [Email](#email)
      * [Contributors](#contributors)
  
  ## License:
      ### ${answers.license}

  ## Description:
      ### ${answers.description}

  ### Images:
      ![code refactor demo](./imagePathHere.png)

      ![code refactor demo](./imagePathHere.png)

      ![code refactor demo](./imagePathHere.png)

  ## Installation Instructions: 
      ### ${answers.installationInstructions}

  ## Test Command: 
      ### To test type ${answers.test} into the terminal

  ## My Github Username: 
      ### Check out more project on my Github at ${answers.gitHub}

  ## My Email Address:
      ### If you have any question please feel free to email me at ${answers.email}
  
  ## Other Contributors:
      ### ${answers.contributors}
`;
}

module.exports = generateMarkdown;
