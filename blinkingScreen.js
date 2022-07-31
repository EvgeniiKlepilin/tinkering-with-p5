let color = 0;
let turningWhite = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  frameRate(60);
}

function draw() {
  background(color);
  if (turningWhite) {
    color++;
    if (color > 255) {
      turningWhite = false;
    }
  } else {
    color--;
    if (color < 0) {
      turningWhite = true;
    }
  }
}