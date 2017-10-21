// Global variable
var clock_face = null,
	ctx = null;

var IMG_HEIGHT = 451,
	IMG_WIDTH = 1200,
	DIGIT_HEIGHT = IMG_HEIGHT,
	DIGIT_WIDTH = 263,
	xPositions = null,
	xSecondStartPos = 0,
	secondWidth = 0,
	secondHeight = 0,
	size = 100;

function clearCanvas() {
	 // clear canvas
	ctx.clearRect(0, 0, IMG_HEIGHT, IMG_WIDTH);
}

function pad2(number) {
	return (number < 10 ? '0' : '') + number;
}

function draw() {

	var currentTime = new Date(),
		time = pad2(currentTime.getHours()) + pad2(currentTime.getMinutes()) + pad2(currentTime.getSeconds()),
		iDigit;

//	console.log(time);
	clearCanvas();

	// Draw the HHHH digits onto the canvas
	for(iDigit = 0; iDigit < 4; iDigit++) {
		drawHHMMDigit(time, iDigit);
	}

	// Draw scalled second digits
//	ctx.drawImage(clock_face, time.substr(4, 1) * DIGIT_WIDTH, 0, DIGIT_WIDTH, DIGIT_HEIGHT, xSecondStartPos, 4, secondWidth, secondHeight);
//	ctx.drawImage(clock_face, time.substr(5, 1) * DIGIT_WIDTH, 0, DIGIT_WIDTH, DIGIT_HEIGHT, xSecondStartPos + secondWidth, 4, secondWidth, secondHeight);
}

function drawHHMMDigit(time, unit) {
	ctx.drawImage(clock_face, time.substr(unit,1) * DIGIT_WIDTH, 0, DIGIT_WIDTH, DIGIT_HEIGHT, xPositions[unit], 0, size, size*DIGIT_HEIGHT/DIGIT_WIDTH);
}

function imgLoaded() {
	// Image loaded event complete.  Start the timer
setInterval(draw, 10000);
}

function init_clock() {
	// Grab the clock element
	var canvas = document.getElementById('clock'),
		iHHMMGap = 8,
		iSSGap = 0;

	// Canvas supported?
	if (canvas.getContext('2d')) {
		ctx = canvas.getContext('2d');

		// Load the clock face image
		clock_face = new Image();
		clock_face.src = 'http://farm26.ru/index_files/flip_clock.png';
		clock_face.onload = imgLoaded;

		xPositions = Array(size * 0,
							size * 1,
							(size * 2) + iHHMMGap,
							(size * 3) + iHHMMGap)

		xSecondStartPos = xPositions[3] + size + iSSGap;

		secondWidth = DIGIT_WIDTH * 0.15;
		secondHeight = DIGIT_HEIGHT * 0.15;

	} else {
		alert("Canvas not supported!");
	}
}

$(document).ready(function() {
if (!is_mobile() && is_anime())
   init_clock();
});