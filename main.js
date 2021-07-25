var canvas = new fabric.Canvas("myCanvas");
var ballX = 0, ballY = 0;
var holeX = 1000, holeY = 600;

holeObj = {};
ballObj = {};

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		holeObj = Img;
		holeObj.scaleToWidth(50);
		holeObj.scaleToHeight(50);
		holeObj.set({
			top:holeY,
			left:holeX
		});
	   canvas.add(holeObj);
        });
	new_image();
}

function new_image(){
	fabric.Image.fromURL("ball.png", function(Img){
		ballObj = Img;
		ballObj.scaleToWidth(50);
		ballObj.scaleToHeight(50);
		ballObj.set({
			top: ballY,
			left: ballX
		});
	   canvas.add(ballObj);
	});
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	if(ballX == holeX && ballY == holeY){
		document.getElementById("hd1").innerHTML = "Wow you won the game !!!"
		document.getElementById("myCanvas").style.borderColor = "red";
	}else{
		if(keyPressed == '38'){
			up();
		}
		if(keyPressed == '40'){
			down();
		}
		if(keyPressed == '37'){
			left();
		}
		if(keyPressed == '39'){
			right();
		}
	}
	
	function up()
	{
		if(ballY > 0){
			ballY -= 50;
			canvas.remove(ballObj);
			new_image();
		}
		
	}

	function down()
	{
		if(ballY < 550){
			ballY += 50;
			canvas.remove(ballObj);
			new_image();
		}
		 
	}

	function left()
	{
		if(ballX < 0){
			ballX -= 50;
			canvas.remove(ballObj);
			new_image();
		}
	}

	function right()
	{
		if(ballX > 950){
			ballX += 50;
			canvas.remove(ballObj);
			new_image();
		}
	}
	
}

