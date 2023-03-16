let _numChildren = 7;
let _maxLevels = 7;

let _trunk;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill();
  smooth();
  newTree();
}

function newTree() {
  _trunk = new Branch(1, 0, width / 2, height / 2);
  _trunk.drawMe();
}

function draw() {
  background(255);
  _trunk.updateMe(width / 2, height / 2);
  _trunk.drawMe();
}

class Branch {
  constructor(lev, ind, ex, why) {
    this.level = lev;
    this.index = ind;

    this.strokeW = (1 / this.level) * 10;
    this.alph = 255 / this.level;
    this.len = (1 / this.level) * random(500);
    this.rot = random(360);
    this.lenChange = random(10) - 5;
    this.rotChange = random(10) - 5;

    this.updateMe(ex, why);
    this.children = [];

    if (this.level < _maxLevels) {
      for (let x = 0; x < _numChildren; x++) {
        this.children[x] = new Branch(this.level + 1, x, this.endx, this.endy);
      }
    } else {
      this.children = [];
    }
  }

  updateMe(ex, why) {
    this.x = ex;
    this.y = why;

    this.rot += this.rotChange;
    if (this.rot > 360) {
      this.rot = 0;
    } else if (this.rot < 0) {
      this.rot = 360;
    }

    this.len -= this.lenChange;
    if (this.len < 0) {
      this.lenChange *= -1;
    } else if (this.len > 500) {
      this.lenChange *= -1;
    }

    let radian = radians(this.rot);
    this.endx = this.x + (this.len * cos(radian));
    this.endy = this.y + (this.len * sin(radian));

    
    if (this.children) {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].updateMe(this.endx, this.endy);
        }
    }
  }

  drawMe() {
    if (this.level > 1) {
      strokeWeight(this.strokeW);
      stroke(0, this.alph);
      fill(255, this.alph);
      line(this.x, this.y, this.endx, this.endy);
      ellipse(this.endx, this.endy, this.len / 12, this.len / 12);
    }
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].drawMe();
    }
  }
}
