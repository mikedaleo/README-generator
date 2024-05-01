// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'MIT') {
    
}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Description
  ${response.description}
  
  ## Table of Contents
  [Installation](#installation)  
  [Usage](#usage)  
  [License](#license)  
  [Contributing](#contributing)  
  [Tests](#tests)  
  [Questions](#questions) 
  
  
  
  ## <a id="installation"></a>Installation
  ${response.install}
  ## <a id="usage"></a>Usage
  ${response.usage}
  ## <a id="license"></a>License
  ${response.license}
  ## <a id="contributing"></a>Contributing
  ${response.contributing}
  ## <a id="tests"></a>Tests
  ${response.tests}
  ## <a id="questions"></a>Questions
  If you have any questions, please contact me:  
  <a href="https://github.com/${response.github}">GitHub</a>  
  or  
  Email: ${response.email}
`;
}

module.exports = generateMarkdown;