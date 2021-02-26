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
        name: 'questions',
        message: 'Enter any questions you have for users.',
    },
  ]);

const generateReadme = (answers) =>
    `
    # ${answers.title}

    **Name**: 

    **Description**: ${answers.description}

    **Table of Contents**: ???

    **Installation**: ${answers.install}
    
    **Usage**: ${answers.usage}
    
    **License**: ${answers.license}

    **Contributing**: ${answers.contributing}

    **Tests**: ${answers.tests}

    **Questions**: ${answers.questions} `

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
