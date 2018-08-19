class Grid {
  constructor(scl, rows, cols) {
    this.scl = scl;
    this.rows = rows;
    this.cols = cols;
    this.table = this.build();
    this.randomise();
  }

  build() {
    let table = [];
    for (let x = 0; x < this.cols; x++) {
      table[x] = [];
      for (let y = 0; y < this.rows; y++) {
        table[x][y] = new Cell(this.scl, x, y);
      }
    }

    return table;
  }

  randomise() {
    for (let col of this.table) {
      for (let c of col) {
        c.pickState();
      }
    }
  }

  draw() {
    for (let col of this.table) {
      for (let c of col) {
        c.draw();
      }
    }
  }

  clicked(x, y) {
    for (let col of this.table) {
      for (let c of col) {
        c.clicked(x, y);
      }
    }
  }

  setAll(val) {
    for (let col of this.table) {
      for (let c of col) {
        c.changeState(val);
      }
    }
  }

  countNearby(cell) {
    let sum = 0;
    for (let yOff = -1; yOff <= 1; yOff++) {
      for (let xOff = -1; xOff <= 1; xOff++) {
        let x = (cell.posIndex.x + xOff + this.cols) % this.cols;
        let y = (cell.posIndex.y + yOff + this.rows) % this.rows;
        let c = this.table[x][y];
        sum += c.state;
      }
    }

    sum -= cell.state;
    return sum;
  }

  update() {
    let nextTable = this.build();
    for (let col of this.table) {
      for (let c of col) {
        let nb = this.countNearby(c);
        let nextState = c.recalcState(nb);
        nextTable[c.posIndex.x][c.posIndex.y].changeState(nextState);
      }
    }

    this.table = nextTable;
  }
}
