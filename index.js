const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions to prompt the user
const questions = [
  {
    type: 'input',
    name: 'gitHub',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?"
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm install'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Who should be credited for this project?',
    default: 'None'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  }
];

// Function to write data to a file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize the application
function init() {
  // Prompt the user with questions and generate README when all responses are collected
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');

    // Generate markdown content based on user responses
    const markdown = generateMarkdown({ ...inquirerResponses });

    // Write markdown content to README.md file
    writeToFile('README.md', markdown);
  });
}

// Call the init function to start the application
init();
