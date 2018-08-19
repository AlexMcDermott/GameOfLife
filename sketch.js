const scl = 20;
const fps = 15;
let g;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  g = new Grid(width, height, scl);
  g.draw();
}

function draw() {
  if (g.isRunning()) {
    g.update();
    g.draw();
  }
}

function keyTyped() {
  g.handleKey(key);
  return false;
}

function mousePressed() {
  g.clicked(mouseX, mouseY);
  return false;
}

function mouseDragged() {
  g.highlight(mouseX, mouseY);
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  g = new Grid(width, height, scl);
}
