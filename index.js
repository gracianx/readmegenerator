// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require("util");
const writeFile = util.promisify(writeToFile);
let README


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your username?",
        name: "username",
        validate: (value) => {
            if (value) { return true }
            else { return "Must enter a value!" }
        }
    },

    {
        type: 'input',
        message: "What is your email address?",
        name: "email",
        validate: (value) => {
            if (value) { return true }
            else { return "Must enter a title!" }

        }

    },

    {
        type: 'input',
        message: "Describe your project.",
        name: "description",
        validate: (value) => {
            if (value) { return true }
            else { return "Must enter a description!" }

        }

    },

    {
        type: 'input',
        message: "Are there steps to install your project? If yes, write them below:",
        name: 'installation'
    },

    {
        type: 'input',
        message: "What is your project used for?",
        name: 'usage'
    },

    {
        type: 'list',
        message: "What licensing does your project fall under?",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },

    {
        type: 'input',
        message: "Let people know how they can contribute.",
        name: 'contribute'
    },

    {
        type: 'input',
        message: "What tests have you run for your app?",
        name: 'tests'
    },


];

// TODO: Create a function to write README file
function writeToFile(README, data) {
    fs.writeFile (README, data, err => {
        if (err) {
            return console.log("Error!");
        }

        else {return console.log("Your README.md will now be created.")} 
    });
 };
// TODO: Create a function to initialize app


async function init() { 

     try {
        const responses = await inquirer.prompt(questions);

        await writeFile (README ,markdown);
    } catch (error) { 
        console.error(error);
    }

};

init();
