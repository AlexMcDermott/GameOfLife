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
  g.draw();
}

function draw() {
  if (running) {
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
    if (!running) {
      g.draw();
    }
  }

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
