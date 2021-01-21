module.exports = {

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderBadge: function renderLicenseBadge(license) {
  let licenseBadge = "";
  switch(license){
    case "The Unlicense":
      console.log("you chose unilicense");
      licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
      break;
    case "Apache":
      console.log("you chose Apache");
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      break;
    case "MIT":
      console.log("you chose MIT");
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "GNU GPLv3":
      console.log("you chose GNU GPLv3");
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "No License":
      console.log("no license selected");
      licenseBadge = "";
      break;
      
  }
  
  return licenseBadge;

},

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLink: function renderLicenseLink(license) {
  let licenseLink = "";
  switch(license){
    case "The Unlicense":
      console.log("you chose unilicense");
      licenseLink = "(http://unlicense.org/)";
      break;
    case "Apache":
      console.log("you chose Apache");
      licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT":
      console.log("you chose MIT");
      licenseLink = "(https://opensource.org/licenses/MIT)";
      break;
    case "GNU GPLv3":
      console.log("you chose GNU GPLv3");
      licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "No License":
      console.log("no license selected");
      licenseLink = "";
      break; 
  }

  return licenseLink;
},

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderSection: function renderLicenseSection(license) {
  let linkLicense = "";
  let licenseSection = "";
  switch(license){
    case "The Unlicense":
      console.log("you chose unilicense");
      linkLicense = "[The Unlicense](http://unlicense.org/)";
      licenseSection = `
## License
This is free and unencumbered software released into the public domain through the ${linkLicense}
`;
      break;
    case "Apache":
      console.log("you chose Apache");
      linkLicense = "[Apache](https://opensource.org/licenses/Apache-2.0)";
      licenseSection = `
## License 
Licensed under the ${linkLicense} license.
`;
      break;
    case "MIT":
      console.log("you chose MIT");
      linkLicense = "[MIT](https://opensource.org/licenses/MIT)";
      licenseSection = `
## License
Licensed under the ${linkLicense} license.
`;
      break;
    case "GNU GPLv3":
      console.log("you chose GNU GPLv3");
      linkLicense = "[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)";
      licenseSection = `
## License
Licensed under the ${linkLicense} license.
`;
      break;
    case "No License":
      console.log("no license selected");
      licenseSection = "";
      break; 
  }

  return licenseSection;
},

// TODO: Create a function to generate markdown for README
markdown: function generateMarkdown(data, licenseBadge, licenseLink, licenseSection) {
  return `${licenseBadge + licenseLink}
# ${data.projectName}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}
${licenseSection}
## Contributing
${data.contribution}

## Tests
${data.test}

## Questions 
* [Link to GitHub](https://github.com/${data.github})
* Email: ${data.email}
* Contact Instructions: 
  * ${data.contactInstuct}
`;
}


}

