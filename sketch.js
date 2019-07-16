var earHeight = 130;
var eyeHeight = 115;
var middle;


function setup() {
  createCanvas(720,480);
  strokeWeight(1);
  ellipseMode(RADIUS);
}

function draw() {
middle = width/2;
background(250);
//legs
quad(middle-10,300,middle-25,300,middle-35,420,middle-5,420);
quad(middle+10,300,middle+25,300,middle+35,420,middle+5,420);
//body
ellipse(middle,height/2,40,75);
//ears
ellipse(middle+40,earHeight,8,15);
ellipse(middle-40,earHeight,8,15);
//face
ellipse(middle,earHeight,40,40);
//eyes
fill(255);
ellipse(middle-15,eyeHeight,10,10);
fill(0);
ellipse(middle-15,eyeHeight,2,2);
fill(255);
ellipse(middle+15,eyeHeight,10,10);
fill(0);
ellipse(middle+15,eyeHeight,2,2);
//nose
fill(255);
ellipse(width/2,earHeight,8,10);
//mouth
fill(255);
beginShape();
vertex(middle+15,148);
vertex(middle+10,150);
vertex(middle+5,153);
vertex(middle,155);
vertex(middle-5,153);
vertex(middle-10,150);
vertex(middle-15,148);
vertex(middle-7,157);
vertex(middle,160);
vertex(middle+7,157);
endShape(CLOSE);
//hair
for (var i = -35; i < 1; i+=2.5) {
    line(middle-i,85-i/4,middle-i,100-i/3);
    line(middle+i,85-i/4,middle+i,100-i/3);
}
//arms
quad(middle-25,180,middle-40,185,middle-70,290,middle-50,290);
quad(middle+25,180,middle+40,185,middle+70,290,middle+50,290);
}
