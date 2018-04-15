let g;
const scl = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let rows = round(height / scl);
  let cols = round(width / scl);
  g = new Grid(scl, rows, cols);
  g.build();
}

function draw() {
  g.draw();
  g.update();
}
