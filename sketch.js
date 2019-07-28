var earHeight = 130;
var eyeHeight = 115;
var middle;
var glasses = 85;
var image;


function preload() {
    img = loadImage("beach.jpg");
}

function setup() {
  createCanvas(720,480);
  strokeWeight(1);
  ellipseMode(RADIUS);
}

function draw() {
middle = width/2;
image(img,0,0);
stroke(0);
fill('#CDA184');
//legs
strokeWeight(1);
fill('#CDA184');
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
fill('#CDA184');
ellipse(width/2,earHeight,8,10);
//mouth
fill('#CA6949');
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
fill('#CDA184');
quad(middle-25,180,middle-40,185,middle-70,290,middle-50,290);
quad(middle+25,180,middle+40,185,middle+70,290,middle+50,290);
//shades
fill(55,55,55,150);
stroke(0);
strokeWeight(3);
ellipse(middle-15,glasses,12,12);
ellipse(middle+15,glasses,12,12);
line(middle-5,glasses,middle+5,glasses);
line(middle-25,glasses,middle-40,eyeHeight);
line(middle+25,glasses,middle+40,eyeHeight);
if (mouseIsPressed) {
    for (i=0; glasses < eyeHeight; i++) {
        glasses+=i;
    }
    //bubble
    strokeWeight(1);
    fill(255);
    ellipse(middle+100,earHeight-5,50,20);
    //speech
    textSize(16);
    fill(92, 24, 219);
    text("Deal with it!",middle+60,earHeight);
} else {
    glasses = 85;
}
}
