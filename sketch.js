function setup() {
  createCanvas(1000,500);
  	 background(2);
  //frameRate(30)
}

function draw() {
  stroke(random(1,200),random(1,200),random(1,200))
  line(0,0,1000,500);
  line(1000,0,0,500);
  fill(255);
  ellipse(500,250,mouseX,mouseY);
}