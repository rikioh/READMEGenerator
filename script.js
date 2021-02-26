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
        type: 'list',
        name: 'license',
        message: 'Please enter any necessary licenses',
        choices:["Mozilla Public","ISC", "MIT"],
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

const licenseChoice = (answers) =>
{
    if(answers.license=="Mozilla Public"){
        license = {
            badge:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            sentence:"This application is covered under the Mozilla Public License"
        }
            return license
    }
    else if(answers.license=="ISC"){
        license = {
            badge:"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
            sentence:"This application is covered under the ISC License"
        }
        return license
    }
    else if(answers.license=="MIT"){
        license = {
            badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            sentence:"This application is covered under the MIT License"
        }
        return license
    }
}

const generateReadme = (answers) =>
`# ${answers.title}     
${license.badge}

## Description 
    ${answers.description}

## Table of Contents
[Description](#Description)<br>
[Installation](#Installation)<br>
[Usage](#Usage)<br>
[License](#License)<br>
[Contributing](#Contributing)<br>
[Tests](#Tests)<br>
[Questions](#Questions)

## Installation 
    ${answers.install}

## Usage 
    ${answers.usage}

## License 
    ${license.sentence}

## Contributing 
    ${answers.contributing}

## Tests 
    ${answers.tests}

## Questions 
    You can reach me via https://github.com/${answers.github} or at ${answers.email} if you have additional questions.`

const init = () => {
  promptUser().then((answers) => {
    try {
      const license = licenseChoice(answers)
      const md = generateReadme(answers);
      fs.writeFileSync('README.md', md);
      console.log('Successfully wrote to readme.md');
    } catch (error) {
      console.log(error);
    }
  });
};

init();
