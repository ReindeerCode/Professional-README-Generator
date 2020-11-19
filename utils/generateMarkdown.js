// function to generate markdown for README
function generateMarkdown(answers) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="sssX-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
    </head>
    <body>
      <div>
          <h1 class="display-4">Project:</h1>
          <h4> ${answers.name}</h4>
      </div>
      </br>
      <div>
      <h2> Table of Contents: </h2> 
      <ul>
          <li>*[Name](#name) </li>
          <li>*[License](#license) </li>
          <li>*[Description](#description) </li>
          <li>*[Installation Instructions](#installationInstructions) </li>
          <li>*[Test](#test) </li>
          <li>*[GitHub](#gitHub) </li>
          <li>*[Email](#email) </li>
          <li>*[Contributors](#contributors) </li>
      </ul>
      </div>
  </br>
      <div>
          <h2>License: </h2>
          <h4>${answers.license} </h4>
      </div>
      </br>   
      <div>
          <h2>Description: </h2>
          <h4>${answers.description} </h4>
      </div>
      </br>   
      <div>
      <h2>Images: </h2> 
          <ul>
              <li>![Project Screenshot](./imagePathHere.png) </li>
              <li>![Project Screenshot](./imagePathHere.png) </li>
              <li>![Project Screenshot](./imagePathHere.png) </li>
          </ul>
      </div>
      <div>
          <h2>Installation Instructions: </h2>
          <h4>${answers.installationInstructions}</h4>
      </div>
      </br> 
      <div>
          <h2>Test Command:</h2>
          <h4>To test type ${answers.test} into the terminal and follow prompts</h4>
      </div>
      </br>
      <div>
          <h2>Other Contributors:</h2>
          <h4>${answers.contributors}</h4>
      </div>
      </br> 
      <div>
          <h2>My Github Username:   </h2>
          <h4>Check out more project on my Github at ${answers.gitHub}</h4>
      </div>
      </br> 
      <div>
          <h2>My Email Address:  </h2>
          <h4>If you have any question please feel free to email me at ${answers.email}</h4>
      </div>
    </body>
  </html>
  `;
}

module.exports = generateMarkdown;
