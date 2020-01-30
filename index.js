const inquirer = require("inquirer");
const axios = require("axios");
const generateHTML = require("./generateHTML.js");
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);
var pdf = require('html-pdf');

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
    choices: ["green", "blue", "pink", "red"]
  }
];

async function init() {
  try {
    let { username } = await promptName();
    let { color } = await promptColor();
    let profile = await gitHubApiCall(username);
    let starCountArray = await gitHubStarCount(username);
    profile.data.color = color;
    let starredCount = starCountArray.data.length;
    profile.data.starCount = starredCount;
    let htmlGen = generateHTML(profile.data);
    writeFileAsync(`${username}.html`, htmlGen).then(function() {
      console.log("File Created.");
      pdfGen(htmlGen)
    });
  } catch (err) {
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
    choices: ["Green", "Blue", "Pink", "Red"]
  });
  return color;
}

function pdfGen(html) {
pdf.create(html).toFile('test.pdf', function(err, res){
  console.log(res.filename);
});  }
function gitHubApiCall(username) {
  const result = axios.get(`https://api.github.com/users/${username}`);
  return result;
}

function gitHubStarCount(username) {
  let starCount = axios.get(`https://api.github.com/users/${username}/starred`);
  return starCount;
}

//Run File
init();
