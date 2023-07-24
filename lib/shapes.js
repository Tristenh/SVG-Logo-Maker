// classes
class Triangle {
  constructor() {
    this.shapeSelection = `<polygon points="100,0 200,200 0,200"`;
  }
}
class Square {
  constructor() {
    this.shapeSelection = `<rect width="200" height="200"`;
  }
}
class Circle {
  constructor() {
    this.shapeSelection = `<circle cx="100" cy="100" r="95"`;
  }
}

// generates shapes
function shape(text, textColor, shapeSelection, shapeColor) {
  return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
${shapeSelection} style="fill:${shapeColor}" stroke="black" stroke-width="3"/>
<text x="100" y="100" font-size="40px" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
Sorry, your browser does not support inline SVG.
</svg>`;
}

module.exports = { Triangle, Square, Circle, shape };
