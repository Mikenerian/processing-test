let cameraZ = 0;
let stairOffset = 0;
let stairList = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();

  for (let i = 0; i < 100; i++) {
    stairList.push(i);
  }
  stairOffset = 100;
}

let maxStairs = 300;

function draw() {
  background(30);
  rotateX(-PI / 4);
  rotateY(PI / 4);
  translate(0, -200, 0);

  const stairHeight = 4;
  const stairRadius = 200;
  const stairThickness = 20;
  const stairWidth = 30;

  let newStairs = 1 * deltaTime / 1000;

  for (let i = 0; i < newStairs; i++) {
    if (stairList.length < maxStairs) {
      stairList.unshift(stairOffset);
      stairOffset++;
    } else {
      stairList.unshift(stairList.pop());
      stairOffset++;
    }
  }

  for (let i = 0; i < stairList.length; i++) {
    let angle = map(stairList[i], 0, stairOffset, 0, TWO_PI * 4);
    let x = cos(angle) * stairRadius;
    let y = i * stairHeight;
    let z = sin(angle) * stairRadius;
    push();
    translate(x, y, z);
    rotateY(angle + PI / 2);
    fill(255);
    box(stairWidth, stairThickness, stairWidth);
    pop();
  }

  cameraZ += stairHeight * (1 * deltaTime / 1000);
  camera(0, -400, cameraZ + 800, 0, 0, cameraZ, 0, 1, 0);
}
