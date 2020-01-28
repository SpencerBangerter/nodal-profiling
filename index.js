const inquirer = require("inquirer");
const axios = require("axios");
const puppeteer = require("puppeteer");
const generateHTML = require("./generateHTML.js")

const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
      },
      {
        type: "list",
        message: "What is your favorite Color?",
        name: "color",
        choices: ['green', 'blue', 'pink', 'red'],
      },
  
];

function promptUser() {
    inquirer.prompt(questions).then(answers => {
        console.log('\Developer Profile:');
        console.log(JSON.stringify(answers, null, '  '));
    });
}

function writeToFile(fileName, data) {
 
}

function init() {
    promptUser()
}

init();


