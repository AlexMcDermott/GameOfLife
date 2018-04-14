class Cell {
  constructor(size, x, y) {
    this.size = size;
    this.posIndex = createVector(x, y);
    this.posPixel = createVector(this.posIndex.x * size, this.posIndex.y * size);
    this.spwnChance = 0.05;
    this.state = this.pickState();
  }

  draw() {
    fill((1 - this.state) * 255);
    rect(this.posPixel.x, this.posPixel.y, this.size, this.size);
  }

  pickState() {
    if (this.spwnChance > random()) {
      return 1;
    } else {
      return 0;
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
