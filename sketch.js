const scl = 20;
const fps = 15;
let g;
let running = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  let rows = round(height / scl);
  let cols = round(width / scl);
  g = new Grid(scl, rows, cols);
  g.build();
}

function draw() {
  if (running === true) {
    g.update();
    g.draw();
  }
}

function keyTyped() {
  if (key === 'p') {
    running = !running;
  }

  if (key === 'c') {
    g.setAll(0);
    if (running == false) {
      g.draw();
    }
  }

  return false;
}

function mouseClicked() {
  g.clicked(mouseX, mouseY);
  g.draw();
  return false;
}
