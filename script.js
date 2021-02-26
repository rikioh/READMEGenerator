const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () =>
  inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of the project application',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are any installation specifications?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage of the application',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please enter any necessary licenses',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list all who contributed to this project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please describe how to test the application.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
  ]);

const generateReadme = (answers) =>
`# ${answers.title}

## Description 
    ${answers.description}

## Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Installation 
    ${answers.install}

## Usage 
    ${answers.usage}

## License 
    ${answers.license}

## Contributing 
    ${answers.contributing}

## Tests 
    ${answers.tests}

## Questions 
    You can reach me via https://github.com/${answers.github} or at ${answers.email} if you have additional questions.`

const init = () => {
  promptUser().then((answers) => {
    try {
      const md = generateReadme(answers);
      fs.writeFileSync('README.md', md);
      console.log('Successfully wrote to readme.md');
    } catch (error) {
      console.log(error);
    }
  });
};

init();
