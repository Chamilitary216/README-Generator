// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
//description, installation instructions, usage information, contribution guidelines, and test instructions
const promptUser = () =>
inquirer.prompt([



const questions = [];
    {
        type: "input",
        name: "projectName",
        message: "What is the name of the project?",
        
    },

    {
        type: "input",
        name: "description",
        message: "Write a decription of your project please",
    },

    {
        type: "input",
        name: "installation",
        message: "How do you install this project?",
    },

    {
        type: "input",
        name: "usage",
        message: "What is the use of this project?",
    },

    {
        type: "list",
        name: "contribution",
        message: "Who contributed to this project?",
    }

    {
        type: "input",
        name: "test",
        message: "Is there a test included?",
    },

    {
        type: "list",
        name: "license"
        message: "Which licenses are used for this project?",
        choices: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    }





// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
