//  packages needed for this application
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "list",
      name: "title",
      message: "please select circle, square or triangle",
      choices: ["circle", "square", "triangle"],
    },
  ])
  .then((data) => {
    if (data.title.includes("circle")) {
      console.log("circle");
    } else if (data.title.includes("square")) {
      console.log("square");
    } else if (data.title.includes("triangle")) {
      console.log("triangle");
    }
    const filename = "shape.svg";
    const dataInfo = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
    Sorry, your browser does not support inline SVG.
    </svg>`;
    //  write SVG file
    fs.writeFile(filename, dataInfo, (err) =>
      err ? console.log(err) : console.log(`success!`)
    );
  });
