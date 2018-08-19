class Grid {
  constructor(width, height, scl) {
    this.scl = scl;
    this.rows = round(height / scl);
    this.cols = round(width / scl);
    this.table = this.build();
    this.running = true;
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

  isRunning() {
    return this.running;
  }

  handleKey(key) {
    if (key === 'p') {
      this.running = !this.running;
    }

    if (key === 'c') {
      this.setAll(0);
      if (!this.running) {
        this.draw();
      }
    }
  }

  randomise() {
    for (let col of this.table) {
      for (let c of col) {
        c.randomise();
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
        if (c.clicked(x, y) == true) {
          c.switchState();
          c.draw();
          return;
        }
      }
    }
  }

  highlight(x, y) {
    for (let col of this.table) {
      for (let c of col) {
        if (c.clicked(x, y) == true) {
          c.setState(1);
          c.draw();
          return;
        }
      }
    }
  }

  setAll(val) {
    for (let col of this.table) {
      for (let c of col) {
        c.setState(val);
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
        nextTable[c.posIndex.x][c.posIndex.y].setState(nextState);
      }
    }

    this.table = nextTable;
  }
}
