var img;
var initials ='ld'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(1300, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // city block 1
   
    fill(6, 24, 100);
    rect(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // window 1

    stroke(3, 3, 0, 0);
    fill( 255, 247, 0)
    rect(mouseX, mouseY, 20, 10);
    
  } else if (toolChoice == '3') { // white line
    strokeWeight(3);
    stroke(225, 225, 225);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '4') { //city block 2
    fill(4, 18, 60);
    rect(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // dark window 1

    fill( 0, 0, 0)
    rect(mouseX, mouseY, 40, 50);
    
  } else if (toolChoice == '6') {// window 3
    colorMode(HSB)
    fill(58, 100, pmouseX, pmouseY);
    rect(mouseX, mouseY, 30, 30);
    
  } else if (toolChoice == '7') {//chimney
stroke( 0, 0, 0, 0)
    fill(0, 0, 0);
    rect(mouseX, mouseY, 10, 40);
    
  } else if (toolChoice == '8') {//smoke 1
stroke
colorMode(HSB)
    fill(240, 8, 59);
    ellipse(mouseX, mouseY, 30, 30);
    
  } else if (toolChoice == '9') {// smoke 2
  colorMode(HSB)
    ellipse(mouseX, mouseY, 20, 30);
    
  } else if (toolChoice == '0') {//people
    stroke(4, 4);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
