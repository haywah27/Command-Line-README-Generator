// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./generateMarkdown");

// array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your repository/ project name?",
        name: "projectName",
      },
      {
        type: "input",
        message: "Enter a description of your application: ",
        name: "description",
      },
      {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "install",
      },
      {
        type: "input",
        message: "Provide instructions for how to use the app",
        name: "usage",
      },
      {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution",
      },
      {
        type: "input",
        message: "What are the test instructions?",
        name: "test",
      },
      {
        type: "list",
        message: "Which license does this project need?",
        choices: ["No License", "The Unlicense", "Apache", "MIT", "GNU GPLv3"],
        name: "license",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
      },
      {
        type: "input",
        message: "What is a good email to reach you at?",
        name: "email",
      },
      {
        type: "input",
        message: "Provide instructions on how to reach you with additional questions?",
        name: "contactInstuct",
      }
];


// function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err =>
    err ? console.error(err) : console.log("Success! New README generated!"));

}

// function to initialize app
function init() {

    inquirer.prompt(questions).then(
        answers => {
            console.log(answers);
            badge = markdown.renderBadge(answers.license);
            badgeLink = markdown.renderLink(answers.license);
            licenseSection = markdown.renderSection(answers.license);
            writeToFile("README.md", markdown.markdown(answers, badge, badgeLink, licenseSection));
        })
    
}

// Function call to initialize app
init();