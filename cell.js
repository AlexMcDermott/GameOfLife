class Cell {
  constructor(size, x, y) {
    this.size = size;
    this.posIndex = { x: x, y: y };
    this.posPixel = { x: x * size, y: y * size };;
    this.spwnChance = 0.50;
    this.state = 0;
  }

  draw() {
    fill((1 - this.state) * 255);
    rect(this.posPixel.x, this.posPixel.y, this.size, this.size);
  }

  clicked(x, y) {
    let xMaxVal = this.posPixel.x + this.size;
    let xMinVal = this.posPixel.x;
    let yMaxVal = this.posPixel.y + this.size;
    let yMinVal = this.posPixel.y;
    if (x <= xMaxVal && x > xMinVal && y <= yMaxVal && y > yMinVal) {
      this.switchState();
      this.draw();
    }
  }

  pickState() {
    if (this.spwnChance > random()) {
      this.state = 1;
    } else {
      this.state = 0;
    }
  }

  recalcState(nb) {
    if (nb < 2 || nb > 3) {
      return 0;
    } else if (nb === 3) {
      return 1;
    } else {
      return this.state;
    }
  }

  changeState(state) {
    this.state = state;
  }

  switchState() {
    if (this.state === 0) {
      this.state = 1;
    } else {
      this.state = 0;
    }
  }
}
