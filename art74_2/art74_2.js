function setup() {
createCanvas(600, 600);
}


function draw() {
background(204);
fill(187, 155, 132); //skin
ellipse(300, 300, 300, 400); //head
fill(164, 148, 135); //white of eyes
ellipse(240, 270, 50, 30); //eye (left)
ellipse(360, 270, 50, 30); //eye (right)
fill(26, 15, 11); //iris color
ellipse(240, 270, 30, 30); //iris (left)
ellipse(360, 270, 30, 30); //iris (right)
fill(0, 0, 0); //iris color
ellipse(240, 270, 20, 20); //iris (left)
ellipse(360, 270, 20, 20); //iris (right)
fill(255, 255, 255); //eyeshine
ellipse(245, 265, 5, 5); //iris (left)
ellipse(365, 265, 5, 5); //iris (right)
fill(142, 87, 82); //lips
beginShape()
vertex(300, 375) 325, 365);
line(300, 375, 275, 365);
line(300, 420, 350, 425);
line(300, 420, 250, 425);
line(285, 405, 250, 425);
line(315, 405, 350, 425);
line(285, 405, 300, 410);
line(315, 405, 300, 410);
endShape();
}
