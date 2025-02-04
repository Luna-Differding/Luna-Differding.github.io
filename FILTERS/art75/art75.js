var capture;

function setup() {
  createCanvas(292.5, 633);
  capture = createCapture(VIDEO);
  capture.size(292.5, 600);
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
  image(capture, 0, 0, 292.5, 633);
  filter(THRESHOLD, .5);
}
