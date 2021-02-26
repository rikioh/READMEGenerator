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
        message: 'Please select your necessary license',
        choices:["ISC", "MIT"],
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
    if(answers.license=="ISC"){
        license = {
            badge:"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
            sentence:`Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.<br>THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
        }
        return license
    }
    else if(answers.license=="MIT"){
        license = {
            badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            sentence:`Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: <br> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
        }
        return license
    }
}

const generateReadme = (answers) =>
`# ${answers.title}     
${license.badge}

## Table of Contents
[Description](#Description)<br>
[Installation](#Installation)<br>
[Usage](#Usage)<br>
[License](#License)<br>
[Contributing](#Contributing)<br>
[Tests](#Tests)<br>
[Questions](#Questions)

## Description 
    ${answers.description}

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
      fs.writeFileSync('READMEexample.md', md);
      console.log('Successfully wrote to READMEexample.md');
    } catch (error) {
      console.log(error);
    }
  });
};

init();
