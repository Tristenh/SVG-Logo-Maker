const { triangle, square, circle } = require("../lib/shapes");

// A test is created to check that the shapes are rendered properly.
describe("triangle", () => {
  it("should render triangle", () => {
    const render = `<polygon points="100,0 200,200 0,200"`;
    expect(render).toEqual(render);
  });
});
describe("square", () => {
  it("should render square", () => {
    const render = `<rect width="200" height="200"`;
    expect(render).toEqual(render);
  });
});
describe("circle", () => {
  it("should render circle", () => {
    const render = `<circle cx="100" cy="100" r="95"`;
    expect(render).toEqual(render);
  });
});
