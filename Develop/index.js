// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
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
            type: "input",
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
                "Apache License",
                "The MIT License",
                "Eclipse 1.0 License",
                "Artistic License",
                "Boost",
                "None",
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
    


// TODO: Create a function to initialize app
async function init () {
    try {
        const userAnswers = await inquirer.prompt(questions);
        const generateContent = generateReadme(userAnswers);
        // Write new README.md to dist directory
        await writeFileAsync('./README.md', generateContent);
        console.log("ReadMe Created");
    } catch(err) {
        console.log(err);
    }

    }


// Function call to initialize app
init();
