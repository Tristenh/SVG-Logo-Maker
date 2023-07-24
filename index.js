//  packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle, shape } = require("./lib/shapes");
const triangle = new Triangle().shapeSelection;
const circle = new Circle().shapeSelection;
const square = new Square().shapeSelection;
// prompts
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "please enter 3 characters",
      validate: function (input) {
        if (!input || input.length > 3) {
          return "Please enter between 1 & 3 characters";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "please input a text color, example #90ee90 or lightgreen",
      validate: function (input) {
        if (!input) {
          return "Please enter text color, example #90ee90 or lightgreen";
        }
        return true;
      },
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
      message: "please input a shape color, example #808080 or gray",
      validate: function (input) {
        if (!input) {
          return "Please enter shape color, example #808080 or gray";
        }
        return true;
      },
    },
  ])

  // data collection
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
