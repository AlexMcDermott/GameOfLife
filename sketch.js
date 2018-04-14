let g;
const scl = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // frameRate(3);
  let rows = round(height / scl);
  let cols = round(width / scl);
  g = new Grid(scl, rows, cols);
  g.build();
}

function draw() {
  g.draw();
  g.update();
}
