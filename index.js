//  packages needed for this application
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "your project name",
  },
]);
