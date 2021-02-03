// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let x;
  switch (license.toString()) {
    case "Apache License, Version 2.0":
      x = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;

      case "MIT":
      x = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    
    case "Eclipse":
      x = "[![License: Eclipse](https://img.shields.io/badge/License-Eclipse-blue)](https://opensource.org/licenses/EPL-2.0)";
      break;

    case 'Artistic':
      x = "[![License: Artistic](https://img.shields.io/badge/License-Artisic-green)](https://opensource.org/licenses/Artistic-2.0";
      break;
    
    
    case 'Boost':
      x = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;

      case 'None':
      x = "";
      break;
  }
  return x;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  <h1 align = "center"> ${data.projectName} </h1>

    ${data.description}
  <h2> Table of Contents: </h2>
  [Description] (#description)
  [Installation] (#installation)
  [Usage] (#usage)
  [Contributors] (#contribution)
  [Tests] (#test)
  [License] (#license)
  [Questions] (#questions)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributors:
  ${data.contribution}

  ## Test:
  ${data.test}

  ## License:
  ${renderLicenseBadge(data.license)}

  ## Questions:
  ${data.questions}

  Follow Me on Github: [${data.github}](https://github.com/${data.github})

  Shoot me an Email with any questions you may have! ${data.email}











`;
}

module.exports = generateMarkdown;
