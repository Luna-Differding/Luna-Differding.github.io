var capture;

function setup() {
  createCanvas(975, 600);
  capture = createCapture(VIDEO);
  capture.size(2532, 1170);
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
  image(capture, 0, 0, 975, 600);
  filter(THRESHOLD, .5);
}
