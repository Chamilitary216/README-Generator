// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateReadme = require("./utils/generateMarkdown.js")



// TODO: Create an array of questions for user input
//description, installation instructions, usage information, contribution guidelines, and test instructions
const questions = [
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
        },
    
        {
            type: "input",
            name: "test",
            message: "Is there a test included?",
        },
    
        {
            type: "list",
            name: "license",
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
         
        },

        {
            type: "input",
            message: "What is your GitHub User Name?",
            name: "github",
        },

        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        }
];
    






// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if 
        (err) {
            return console.log (err);
        }
        console.log("Read Me had been created.")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt (promptUser)
    .then((response) => {
        console.log(response)
        const randomName = "README_${response.name.toLowerCase().split(' ').join('')}.md";
        writeToFile(randomName, markDown(response))

    })
    
}

// Function call to initialize app
init();
