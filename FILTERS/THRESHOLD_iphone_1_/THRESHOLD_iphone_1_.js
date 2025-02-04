var capture;

function setup() {
  createCanvas(1770, 2532);
  capture = createCapture(VIDEO);
  capture.size(1170, 2532);
  capture.hide();
  filterModes = [ 
    GRAY, 
    OPAQUE, 
    INVERT, 
    POSTERIZE, 
    BLUR, 
    ERODE, 
    DILATE, 
    BLUR, 
    THRESHOLD 
  ]; 
}

function draw() {
  background(255);
  image(capture, 0, 0, 1170, 2532);
  filter(THRESHOLD, .5);
}
