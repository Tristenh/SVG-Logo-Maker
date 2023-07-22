//  packages needed for this application
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "your project name",
    },
  ])
  .then((data) => {
    const filename = "shape.svg";
    const dataInfo = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
Sorry, your browser does not support inline SVG.
</svg>`;
    //  write README file
    fs.writeFile(filename, dataInfo, (err) =>
      err ? console.log(err) : console.log(`success!`)
    );
  });
