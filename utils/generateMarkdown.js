// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
} else if (license === 'MPL') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
} else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
} else if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
} else {
    return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
    return `This application uses the MIT license: https://opensource.org/licenses/MIT`;
} else if (license === 'MPL') {
    return `This application uses the MPL license: https://opensource.org/licenses/MPL-2.0`;
} else if (license === 'Apache') {
    return `This application uses the Apache license: https://opensource.org/licenses/Apache-2.0`;
} else if (license === 'Unlicense') {
    return `This application uses the Unlicense license: http://unlicense.org`;
} else {
    return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return ''
    } else {
        return `## <a id="license"></a>License\n\n${renderLicenseLink(license)}`
    }
}

function renderLicenseSectionLink(license) {
    if (license === 'None') {
        return '';
    } else {
        return '[License](#license)';
    }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, install, usage, license, contributing, tests, github, email}) {
  return `# ${title}
  ${renderLicenseBadge(license)} 
  ## Description
  ${description}
  
  ## Table of Contents
  [Installation](#installation)  
  [Usage](#usage)  
  ${renderLicenseSectionLink(license)}  
  [Contributing](#contributing)  
  [Tests](#tests)  
  [Questions](#questions) 
  
  
  
  ## <a id="installation"></a>Installation
  ${install}
  ## <a id="usage"></a>Usage
  ${usage}
  ${renderLicenseSection(license)}
  ## <a id="contributing"></a>Contributing
  ${contributing}
  ## <a id="tests"></a>Tests
  ${tests}
  ## <a id="questions"></a>Questions
  If you have any questions, please contact me:  
  <a href="https://github.com/${github}">GitHub</a>  
  or  
  Email: ${email}
`;
}

module.exports = generateMarkdown;