module.exports = {

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderBadge: function renderLicenseBadge(license) {},

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLink: function renderLicenseLink(license) {},

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderSection: function renderLicenseSection(license) {},

// TODO: Create a function to generate markdown for README
markdown: function generateMarkdown(data) {
  return `
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

## License
${data.license}

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

