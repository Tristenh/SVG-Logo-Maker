//  packages needed for this application
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const { triangle, square, circle, shape } = require("./lib/shapes");
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "please enter 3 characters",
    },
    {
      type: "input",
      name: "textColor",
      message: "please input a text color",
    },
    {
      type: "list",
      name: "title",
      message: "please select circle, square or triangle",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "please input a shape color",
    },
  ])
  .then((data) => {
    if (data.text) {
      text = data.text;
    }
    if (data.textColor) {
      textColor = data.textColor;
    }
    let selectedShape;
    if (data.title.includes("circle")) {
      selectedShape = circle;
    } else if (data.title.includes("square")) {
      selectedShape = square;
    } else if (data.title.includes("triangle")) {
      selectedShape = triangle;
    }
    if (data.shapeColor) {
      shapeColor = data.shapeColor;
    }
    const filename = "logo.svg";
    const dataInfo = shape(text, textColor, selectedShape, shapeColor);
    //  write SVG file
    fs.writeFile(filename, dataInfo, (err) =>
      err ? console.log(err) : console.log(`Generated logo.svg`)
    );
  });
