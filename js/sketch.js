// function setup() {
//     createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//     ellipse(100, 100, 80, 50);
// }

var yPos = 0;
function setup() {
    frameRate(30);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#e0ffff');
    yPos = yPos - 5;
    if (yPos < 0) {
        yPos = height;
    }
    line(0, yPos, width, yPos);
}

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
 
// // Jitter class
// function Jitter() {
//   this.x = random(width);
//   this.y = random(height);
//   this.diameter = random(10, 30);
//   this.speed = 1;
 
//   this.move = function() {
//     this.x += random(-this.speed, this.speed);
//     this.y += random(-this.speed, this.speed);
//   };
 
//   this.display = function() {
//     ellipse(this.x, this.y, this.diameter, this.diameter);
//   }
// };