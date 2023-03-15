var xstart, ystart, zstart;
var xnoise, ynoise, znoise;

var sideLength = 200;
var spacing = 10;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    noStroke();

    xstart = random(10);
    ystart = random(10);
    zstart = random(10);
}
function draw() {
    background(0);

    xstart += 0.01;
    ystart += 0.01;
    zstart += 0.01;

    xnoise = xstart;
    ynoise = ystart;
    znoise = zstart;

    translate(100, 20, -150);
    rotateZ(frameCount * 0.1);
    rotateY(frameCount * 0.1);

    for (var z = 0; z <= sideLength; z+=spacing) {
        znoise += 0.1;
        ynoise = ystart;
        for (var y = 0; y < sideLength; y+=spacing) {
            ynoise += 0.1;
            xnoise = xstart;
            for (var x = 0; x <= sideLength; x+=spacing) {
                xnoise += 0.1;
                drawPoint(x, y, z, noise(xnoise, ynoise, znoise));
            }
        }
    }
}

function drawPoint(x, y, z, noiseFactor) {
    push();
    translate(x, y, z);
    var grey = noiseFactor * 255;
    fill(grey, 20);
    box(spacing, spacing, spacing);
    pop();
}