class PointObj {
  constructor(ex, why) {
    this.x = ex;
    this.y = why;
  }
}

class FractalRoot {
  constructor() {
    this.pointArr = new Array(5);
    this.rootBranch = null;
  }

  drawShape() {
    this.rootBranch.drawMe();
  }
}

class Branch {
  constructor(lev, n, points) {
    this.level = lev;
    this.num = n;
    this.outerPoints = points;
    this.innerPoints = [];

    if (this.level < _maxlevels) {
      for (let i = 0; i < this.outerPoints.length; i++) {
        let nexti = i + 1;
        if (nexti === this.outerPoints.length) {
          nexti = 0;
        }
        const midX = (this.outerPoints[i].x + this.outerPoints[nexti].x) / 2;
        const midY = (this.outerPoints[i].y + this.outerPoints[nexti].y) / 2;

        this.innerPoints.push(new PointObj(midX, midY));
      }
      this.innerBranch = new Branch(this.level + 1, 0, this.innerPoints);
    }
  }

  drawMe() {
    strokeWeight(5 - this.level);
    // draw outer shape
    for (let i = 0; i < this.outerPoints.length; i++) {
      let nexti = i + 1;
      if (nexti === this.outerPoints.length) {
        nexti = 0;
      }
      line(
        this.outerPoints[i].x,
        this.outerPoints[i].y,
        this.outerPoints[nexti].x,
        this.outerPoints[nexti].y
      );
    }

    if (this.innerBranch) {
      this.innerBranch.drawMe();
    }
  }
}

let pentagon;
const _maxlevels = 5;

function setup() {
  createCanvas(1000, 1000);
  pentagon = new FractalRoot();
  const centX = width / 2;
  const centY = height / 2;
  let count = 0;
  for (let i = 54; i < 414; i += 72) {
    const x = centX + 400 * cos(radians(i));
    const y = centY + 400 * sin(radians(i));
    pentagon.pointArr[count] = new PointObj(x, y);
    count++;
  }
  pentagon.rootBranch = new Branch(0, 0, pentagon.pointArr);
}

function draw() {
  background(255);
  pentagon.drawShape();
}
