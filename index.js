const inquirer = require("inquirer");
const axios = require("axios");
const puppeteer = require("puppeteer");
const generateHTML = require("./generateHTML.js")
const util = require("util");

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


async function init() {
    try {
        let { username } = await promptName();
        let color = await promptColor();
        let profile = await gitHubApiCall(username);
        profile.color = color.color

        console.log('\Developer Profile:');
        console.log(profile.data);
        writeToFile(`${username}.html`, profile)
    }catch (err) {
        console.log(err);
      }

}


// Functions

function promptName() {
  const username = inquirer.prompt({
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
      });
    return username;
}

function promptColor() {
   const color = inquirer.prompt({
        type: "list",
        message: "What is your favorite Color?",
        name: "color",
        choices: ['Green', 'Blue', 'Pink', 'Red'],
    });
    return color
}

function gitHubApiCall(username) {
    const result = axios.get(`https://api.github.com/users/${username}`);
    return result;
}

function writeToFile(fileName, data) {
    generateHTML(data)
}

//Run File
init();
