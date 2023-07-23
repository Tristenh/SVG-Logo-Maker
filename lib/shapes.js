const triangle = `<polygon points="100,10 200,200 0,200" style="fill:lime;stroke:purple;stroke-width:1" />`;

const square = `<rect width="200" height="200" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />`;

const circle = `<circle cx="100" cy="100" r="95" stroke="black" stroke-width="3" fill="red" />`;

function shape(text, textColor, shapeSelection) {
  return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
${shapeSelection}
<text x="100" y="100" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
Sorry, your browser does not support inline SVG.
</svg>`;
}

module.exports = { triangle, square, circle, shape };
