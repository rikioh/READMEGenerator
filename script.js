const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]);

const generateReadme = (answers) =>
    `${answers.name}
    ${answers.location}
    ${answers.github}
    ${answers.linkedin}`

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
