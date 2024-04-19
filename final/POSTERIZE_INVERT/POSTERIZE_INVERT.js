let capture;

function setup() {
  createCanvas(820, 600);
  capture = createCapture(VIDEO);
  capture.size(820, 600);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 820, 600);
  filter (POSTERIZE,3);
  filter (INVERT);
}
