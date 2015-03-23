(function() {

	// Get the buttons.
	var startBtn = document.getElementById('startBtn');
	var stopBtn = document.getElementById('stopBtn');
	var resetBtn = document.getElementById('resetBtn');

	// A variable to store the requestID.
	var requestID;

	// Canvas
	var canvas = document.getElementById('stage');

	// 2d Drawing Context.
	var ctx = canvas.getContext('2d');

	// Set the fill style for the drawing context.
	img=new Image();
	img.src='car.png';
   	img.onload = function(){
    ctx.drawImage(img, 10, 10);
  }

	// Variables to for the drawing position and object.
	var posX = 0;
	var boxWidth = 50;
	var pixelsPerFrame = 8; // How many pixels the box should move per frame.
	var finishLine=canvas.width-350; // x position of the finish line

	img2=new Image();
	img2.src='car.png';
   	img2.onload = function(){
    ctx.drawImage(img2, 10, 250);
	}
	
	var posX2=0;
	var pixelsPerFrame2=9;
  


	// Animate.
	function animate() {
		requestID = requestAnimationFrame(animate);

		// If the box has not reached the end draw on the canvas.
		// Otherwise stop the animation.
		if ((posX <= (finishLine - boxWidth)) && (posX2 <= (finishLine - boxWidth))) {
			ctx.clearRect((posX - pixelsPerFrame), 0, boxWidth, canvas.height);
			ctx.drawImage(img,posX,10);
			posX += pixelsPerFrame;
			ctx.clearRect((posX2-pixelsPerFrame2),250,boxWidth,canvas.height);
			ctx.drawImage(img2,posX2,250);
			posX2+=pixelsPerFrame2;
		} else {
			cancelAnimationFrame(requestID);
			ctx.font = "20px Georgia";
			ctx.fillText("F", 10, 50);
			ctx.fillText("I", 10, 100);
			ctx.fillText("N", 10, 150);
			ctx.fillText("I", 10, 200);
			ctx.fillText("S", 10, 250);
			ctx.fillText("H", 10, 300);
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(0, 350);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(50, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(50, 0);
			ctx.lineTo(50, 350);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(50, 350);
			ctx.lineTo(0, 350);
			ctx.stroke();
			if(pixelsPerFrame==pixelsPerFrame2) {
			ctx.fillText("TIE",250,200);
			}
			else if(pixelsPerFrame>pixelsPerFrame2) {
			ctx.fillText("WINNER",250,100);
			}
			else {
			ctx.fillText("WINNER",250,300);
			}
		}
	}


	// Event listener for the start button.
	startBtn.addEventListener('click', function(e) {
		e.preventDefault();

		// Start the animation.
		requestID = requestAnimationFrame(animate);
	});


	// Event listener for the stop button.
	stopBtn.addEventListener('click', function(e) {
		e.preventDefault();

		// Stop the animation;
		cancelAnimationFrame(requestID);
	});


	// Event listener for the reset button.
	resetBtn.addEventListener('click', function(e) {
		e.preventDefault();

		// Reset the X position to 0.
		posX = 0;
		posX2=0;
		// Clear the canvas.
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw the initial box on the canvas.
		ctx.drawImage(img,10,10);
		ctx.drawImage(img2,10,250);
		
	});

}());
