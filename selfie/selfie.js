function setup() {
createCanvas(600, 600);
}
function draw() {
background(204);
fill(54, 42, 28); //hair
ellipse(300, 125, 150, 150);//bun
fill(0, 0, 0);//shirt
beginShape()
vertex(300, 470);
vertex(50, 520);
vertex(10,600);
vertex(590,600);
vertex(560,520);
vertex(300, 470)
endShape();


fill(187, 155, 132); //skin
ellipse(300, 300, 300, 400); //head
fill(164, 148, 135); //white of eyes
ellipse(240, 280, 50, 30); //eye (left)
ellipse(360, 280, 50, 30); //eye (right)
fill(26, 15, 11); //iris color
ellipse(240, 280, 30, 30); //iris (left)
ellipse(360, 280, 30, 30); //iris (right)
fill(0, 0, 0); //iris color
ellipse(240, 280, 20, 20); //iris (left)
ellipse(360, 280, 20, 20); //iris (right)
fill(255, 255, 255); //eyeshine
ellipse(245, 275, 5, 5); //iris (left)
ellipse(365, 275, 5, 5); //iris (right)
line(300, 375, 325, 365);//nose
line(300, 375, 275, 365);
line(300, 335, 310, 338);
line(300, 335, 290, 338);
fill(142, 87, 82); //lips
beginShape()
vertex(350, 425);//right middle of lip
vertex(300, 420);//center middle of lip
vertex(250, 425);//left middle of lip
vertex(285, 405);//left-left top lip
vertex(300, 410);//center top lip
vertex(315, 405);
vertex(350, 425);
vertex(315,440);
vertex(285,440);
vertex(250,425);
endShape();//end of mouth
fill(54, 42, 28); //hair
beginShape()//left eyebrow
vertex(210, 230)
vertex(275, 240)
vertex(270, 227)
vertex(207, 220)

endShape()
beginShape()//right eyebrow
vertex(394, 230)
vertex(325, 240)
vertex(330, 227)
vertex(393, 220)

endShape()
beginShape()//left hair
vertex(298, 100);
vertex(275, 95);
vertex(160, 150);
vertex(140, 250);
vertex(120, 270);
vertex(140, 350);
vertex(120, 420);
vertex(140, 550);
vertex(150, 440);
vertex(180, 370);
vertex(180, 260);
vertex(315, 150);
vertex(298, 100);
endShape()
beginShape()//right hair
vertex(302, 100)
vertex(325, 95)//start
vertex(440, 150);
vertex(460, 250);
vertex(480, 270);
vertex(460, 350);
vertex(480, 420);
vertex(460, 550);
vertex(450, 440);
vertex(420, 370);
vertex(420, 260);
vertex(320, 150);
vertex(302, 100);
endShape()
}
