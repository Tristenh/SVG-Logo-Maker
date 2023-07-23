const triangle = `<polygon points="200,10 200,200 0,200" style="fill:lime;stroke:purple;stroke-width:1" />`;

const square = `<rect width="200" height="200" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />`;

const circle = `<circle cx="100" cy="100" r="95" stroke="black" stroke-width="3" fill="red" />`;

function shape(selection) {
  return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
${selection}
Sorry, your browser does not support inline SVG.
</svg>`;
}

module.exports = { triangle, square, circle, shape };
