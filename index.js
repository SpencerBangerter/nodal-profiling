const inquirer = require("inquirer");
const axios = require("axios");
const puppeteer = require("puppeteer");
const generateHTML = require("./generateHTML.js")
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);

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
        let { color } = await promptColor();
        let profile = await gitHubApiCall(username);
        profile.data.color = color

        let htmlGen = generateHTML(profile.data);
        writeFileAsync(`${username}.html`, htmlGen).then(function () {
          console.log('File Created.')
        })
        console.log(profile.data, profile.color)
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
   let color = inquirer.prompt({
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
console.log(`${fileName}`, data.data, data.color)}

//Run File
init();
