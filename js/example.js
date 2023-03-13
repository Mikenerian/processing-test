// example 1
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    ellipse(100, 100, 80, 50);
}

// example 2
// var yPos = 0;
// function setup() {
//     frameRate(30);
//     createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//     background('#e0ffff');
//     yPos = yPos - 5;
//     if (yPos < 0) {
//         yPos = height;
//     }
//     line(0, yPos, width, yPos);
// }

// excample 3
// var bug;
// function setup() {
//   createCanvas(800, 400);
//   bug = new Jitter(); //オブジェクトの生成
// }

// function draw() {
//   background(200);
//   bug.move();
//   bug.display();
// }