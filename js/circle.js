
// circle noise
function setup() {
    frameRate(10);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    strokeWeight(5);
    smooth();

    var radius = 200;
    var centx = windowWidth / 2;
    var centy = windowHeight / 2;

    stroke(0, 30);
    noFill();
    ellipse(centx, centy, radius*2, radius*2);

    stroke(20, 50, 70);
    strokeWeight(1);

    var x = 0;
    var y = 0;
    var noiseval = Math.random(10);
    var radVariance = 0;
    var thisRadius = 0;
    var rad = 0;

    beginShape();
    fill(20, 50, 70, 100);
    for (var ang = 0; ang <= 360; ang += 1) {
        noiseval += 0.1;
        radVariance = 60 * customNoise(noiseval);

        thisRadius = radius + radVariance;
        rad = radians(ang);
        x = centx + (thisRadius * Math.cos(rad));
        y = centy + (thisRadius * Math.sin(rad));

        curveVertex(x, y);
    }
    endShape();
}

function customNoise(val) {
    var retValue = Math.pow(Math.sin(val), 3);
    return retValue;
}