function setup() {
	createCanvas(windowWidth, windowHeight);
	background(232, 255, 88);
}
var speed = 7;
var c;
var d;
var ec = {
	x:1,
	y:10
};
function draw() {
	background(255);

	ec.y = random(10,200);
	c = map(mouseX, 0, windowWidth, 0, 255);
	d = map(mouseY, 0, windowWidth, 0, 255);
	if(mouseX == ec.x && mouseY == windowHeight/2 && mouseIsPressed){
		background(0);
	}
  if (ec.x > windowWidth || ec.x < 0) {
		speed = speed * -1;
  	fill(255, ec.y, 12);
    if(speed < 0){
		console.log("touched the endline");
	}else{
		console.log("touched the front line");
	}
  }
	for(i = 0; i < windowHeight; i = i + 100){
	fill(255, ec.y, 12);
	ellipse(ec.x, i, 20, 20);
}
	ec.x = ec.x + speed;


	noStroke();
	// ec.y = ec.y + 10;
}

function mousePressed() {
	background(32, mouseX, mouseY);
}
