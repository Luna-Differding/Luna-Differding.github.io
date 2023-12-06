var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0
var gameState = "L1"
var img1, img2, img3; //image variable

function preload() {
  img1 = loadImage('Luna-Differding.github.io/img1.jpg');  // 
  img2 = loadImage('Luna-Differding.github.io/img2.png');
  img3= loadImage('Luna-Differding.github.io/img3.jpg');
}

function setup() {
 createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
 
}//end of setup


function draw() {
   background(200);
    if(gameState == "L1"){
    levelOne();
    }  
    
    if(gameState == "L2"){
      levelTwo();
    }
    
    if(gameState == "L3"){
      levelThree();
    }
    if(gameState == "win"){
    }
    text(("Score: "+ score), width/2, 40);
}//end draw

function levelOne() {
  background(200,100,0);
    text("Level 1", width/2, height-20);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2) {
      ballx=random(width);
      bally=random(height);
      score = score + 1;
    
    }
   if(score>5){
    gameState = "L2";
 
   }
   
    ellipse(ballx, bally, ballSize);
    image (img1, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
     line(ballx, bally, mouseX, mouseY);
    
}// end of level one

function levelTwo() {
  background(200,100,100);
    text("Level 2!", width/2, height-20);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2) {
      ballx=random(width);
      bally=random(height);
      score = score + 1;
    
    }
   if(score > 10){
     gameState = "L3";
 
   }
    
    ellipse(ballx, bally, ballSize);
    image (img2, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
    
    
}// end of level two

function levelThree() {
    text("level 3", width/2, height-20);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2) {
      ballx=random(width);
      bally=random(height);
      score = score + 1;
      ballSize= ballSize -5;
    }
   if(score > 19){
   gameState = "level 3";
   }
    
    ellipse(ballx, bally, ballSize);
    image (img3, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
    
    
}// end of level three
if(score>29){
// level 4
   gameState = "win";
}