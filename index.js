// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide installation instructions for your project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you intend your project to be used?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please set some contribution guidelines.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please include any tests of your project.',
        },
        {
            type: 'list', 
            message: 'Please include any tests of your project.',
            name: 'license',
            choices: ['MIT', 'MPL', 'Apache', 'Unlicense'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub Username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
        },

    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('README created!');
    })
}

// TODO: Create a function to initialize app
function init() { 
    questions()
    .then((data) => writeToFile('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully created README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();