const scl = 20;
let g;
let running = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  let rows = round(height / scl);
  let cols = round(width / scl);
  g = new Grid(scl, rows, cols);
  g.build();
}

function draw() {
  g.draw();
  if (running === true) {
    g.update();
  }
}

function keyTyped() {
  if (key === 'p') {
    if (running === true) {
      running = false;
    } else {
      running = true;
    }
  } else if (key === 'c') {
    g.setAll(0);
  }

  return false;
}

function mouseClicked() {
  g.clicked(mouseX, mouseY);
  return false;
}
