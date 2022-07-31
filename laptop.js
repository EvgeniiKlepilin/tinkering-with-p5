let x = 0;
let y = 0;

let monitorRimWidth = 20;
let monitorWidth = 0;
let monitorHeight = 0;

let keyboardHeight = 20;

let indicatorHeight = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  y = PI * 2;
  monitorWidth = windowWidth / 2;
  monitorHeight = windowHeight / 4;
  
}

function draw() {
  background(0);
  
  drawMonitor();
  drawKeyboard();
  drawActivityIndicator();
  
  
  
}

function drawMonitor() {
  const rimLeft = windowWidth / 4 - monitorRimWidth / 2;
  const rimTop = windowHeight / 4 - monitorRimWidth / 2;
  const rimWidth = monitorWidth + monitorRimWidth;
  const rimHeight = monitorHeight + monitorRimWidth;
  rect(rimLeft, rimTop, rimWidth, rimHeight, 10);
  
  const monitorLeft = windowWidth / 4;
  const monitorTop = windowHeight / 4;
  rect(monitorLeft, monitorTop, monitorWidth, monitorHeight);
}

function drawKeyboard() {
  const left = windowWidth / 4 - monitorRimWidth / 2;
  const top = windowHeight / 2 + monitorRimWidth / 2;
  const width = windowWidth / 2 + monitorRimWidth;
  rect(left, top, width, keyboardHeight, 0, 0, 10, 10);
}

function drawActivityIndicator() {
  arc(windowWidth / 2, windowHeight / 2 - monitorHeight / 2, indicatorHeight, indicatorHeight, x, y);
  
  if (x === 0) {
    y += 0.1;
    if (y > PI * 2) {
      y = 0;
    }
  }
  
  if (y === 0) {
    x += 0.1;
    if (x > PI * 2) {
      x = 0;
    }
  }
}