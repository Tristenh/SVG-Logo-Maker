//  packages needed for this application
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const { triangle, square, circle, shape } = require("./lib/shapes");
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
    let selectedShape;
    if (data.title.includes("circle")) {
      selectedShape = circle;
    } else if (data.title.includes("square")) {
      selectedShape = square;
    } else if (data.title.includes("triangle")) {
      selectedShape = triangle;
    }
    const filename = "shape.svg";
    const dataInfo = shape(selectedShape);
    //  write SVG file
    fs.writeFile(filename, dataInfo, (err) =>
      err ? console.log(err) : console.log(`success!`)
    );
  });
