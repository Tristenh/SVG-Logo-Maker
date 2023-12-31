//  packages needed for this application
const { Triangle, Square, Circle, shape } = require("../lib/shapes");

// A test is created to check that the shapes are rendered properly.
describe("triangle", () => {
  it("should render triangle", () => {
    const render = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="100,0 200,200 0,200" style="fill:red" stroke="black" stroke-width="3"/>
<text x="100" y="100" font-size="40px" fill="blue" text-anchor="middle" dominant-baseline="middle">TJH</text>
Sorry, your browser does not support inline SVG.
</svg>`;
    const triangleShape = new Triangle();
    const result = shape("TJH", "blue", triangleShape.shapeSelection, "red");
    expect(result).toEqual(render);
  });
});
describe("square", () => {
  it("should render square", () => {
    const render = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" style="fill:red" stroke="black" stroke-width="3"/>
<text x="100" y="100" font-size="40px" fill="blue" text-anchor="middle" dominant-baseline="middle">TJH</text>
Sorry, your browser does not support inline SVG.
</svg>`;
    const squareShape = new Square();
    const result = shape("TJH", "blue", squareShape.shapeSelection, "red");
    expect(result).toEqual(render);
  });
});
describe("circle", () => {
  it("should render circle", () => {
    const render = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="95" style="fill:red" stroke="black" stroke-width="3"/>
<text x="100" y="100" font-size="40px" fill="blue" text-anchor="middle" dominant-baseline="middle">TJH</text>
Sorry, your browser does not support inline SVG.
</svg>`;
    const circleShape = new Circle();
    const result = shape("TJH", "blue", circleShape.shapeSelection, "red");
    expect(result).toEqual(render);
  });
});
