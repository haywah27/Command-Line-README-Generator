// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'projectName',
      },
      {
        type: 'input',
        message: 'Enter a description of your application: ',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the installation instructions for the app?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
      },
      {
        type: 'list',
        message: 'Which license does this project need?',
        choices: ['The Unlicense', 'Apache', 'MIT', 'GNU GPLv3'],
        name: 'license',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is a good email to reach you at?',
        name: 'email',
      }
];

// inquirer.prompt(questions).then(writeToFile);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err =>
    err ? console.error(err) : console.log('Success! New README generated!'));

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then(
        answers => {
            console.log(answers);
            writeToFile('log.txt', JSON.stringify(answers))
        }

    )
    
}

// Function call to initialize app
init();


// sections:
// Description, 
// Table of Contents, 
// Installation, 
// Usage, 
// License, 
// Contributing, 
// Tests,
// Questions