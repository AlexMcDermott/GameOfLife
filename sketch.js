const scl = 20;
let grid;
let rows;
let cols;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(1);
  rows = round(height / scl);
  cols = round(width / scl);
  grid = makeGrid();
}

function draw() {
  drawGrid(grid);
  grid = updateGrid(grid);
}

function makeGrid() {
  let grid = [];
  for (let x = 0; x < cols; x++) {
    let col = [];
    for (let y = 0; y < rows; y++) {
      col[y] = round(random(1));
    }
    grid[x] = col;
  }
  return grid;
}

function drawGrid(grid) {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      console.log(x + " " + y);
      fill((1-grid[x][y]) * 255);
      rect(x*scl, y*scl, scl, scl);
    }
  }
}

function calcNearby(grid, x, y) {
  let sum = 0;
  for (let yoff = -1; yoff <= 1; yoff++) {
    for (let xoff = -1; xoff <= 1; xoff++) {
      sum += grid[(x+xoff+cols) % cols][(y+yoff+rows) % rows];
    }
  }
  sum -= grid[x][y];
  return sum;
}

function updateGrid(grid) {
  nextGrid = grid;
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      nb = calcNearby(grid, x, y);
      if (nb < 2) {
        nextGrid[x][y] = 0;
      }
      if (nb > 3) {
        nextGrid[x][y] = 0;
      }
      if (nb == 3) {
        nextGrid[x][y] = 1;
      }
    }
  }
  return nextGrid;
}
