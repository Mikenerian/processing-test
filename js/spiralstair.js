let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(30);
  orbitControl(2, 2, 0.1);
  ambientLight(255);
  rotateX(-PI / 6);
  rotateY(PI / 4);
  translate(0, -200, 0);

  const stairs = 100;
  const stairHeight = 4;
  const stairRadius = 200;
  const stairThickness = 20;
  const stairWidth = 30;

  for (let i = 0; i < stairs; i++) {
    push();
    let stairAngle = map(i, 0, stairs, 0, TWO_PI * 4);
    let x = cos(stairAngle) * stairRadius;
    let y = sin(stairAngle) * stairRadius;
    let z = i * stairHeight;

    translate(x, z, y);
    rotateY(-stairAngle);
    ambientMaterial(230);
    box(stairWidth, stairThickness, stairWidth);
    pop();
  }

  angle += 0.005;
}
