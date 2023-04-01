X = 0;
Y = 0;
Pause="";
function preload() {
	world_start = loadSound("world_start.wav");
	Gameover = loadSound("gameover.wav");
	jump = loadSound("jump.wav");
	Kill = loadSound("kill.wav");
	Die = loadSound("die.wav");
	Coin = loadSound("coin.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas")

	vid = createCapture(VIDEO);
	vid.size(800, 400)
	vid.parent("Game_Console")

	instializeInSetup(mario);

	posenet = ml5.poseNet(vid, modelLoaded);
	posenet.on("pose", gotResults)
}
function gotResults(results) {
	if (results.length > 0) {
		X = results[0].pose.nose.x;
		Y = results[0].pose.nose.y;
		

	}
}
// function pause_Game(){
// noLoop()
// }
function draw() {
	game()
	
}
function Game_console() {
	window.scrollTo(0, 700)
}
function modelLoaded(){
	console.log("Model Loaded")
  }






