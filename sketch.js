var eyeHeight = 130;
var skin = 234;

function setup() {
  createCanvas(720, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
background(250);
//ears
fill(skin);
ellipse(240,eyeHeight,8,15);
fill(skin);
ellipse(320,eyeHeight,8,15);
//face
fill(skin);
ellipse(280,eyeHeight,40,40);
//eyes
fill(255);
ellipse(295,115,10,10);
fill(0);
ellipse(295,115,2,2);
fill(255);
ellipse(265,115,10,10);
fill(0);
ellipse(265,115,2,2);
//nose
fill(255);
ellipse(280,132,8,10);
//mouth
fill(255);
beginShape();
vertex(295,148);
vertex(290,150);
vertex(285,153);
vertex(280,155);
vertex(275,153);
vertex(270,150);
vertex(265,148);
vertex(273,157);
vertex(280,160);
vertex(287,157);
endShape(CLOSE);
}
