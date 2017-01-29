const BALL_RADIUS = 24
const START_OFFSET = 83.45
const BETWEEN_OFFSET = 167

function initCanvas() {
	var canvas = document.getElementById('canvas');
	var canvasContext = canvas.getContext('2d');

	return canvasContext;
}

function setProperties(canvasContext) {
	canvasContext.lineWidth = 15;
	canvasContext.fillStyle = '#2ecc71'
	canvasContext.strokeStyle = '#2ecc71'
	canvasContext.font = 'bold 30px Arial'
}

function drawCircle(CircleNumber, CirleText) {
	var x_position = START_OFFSET + (BETWEEN_OFFSET * Math.floor(CircleNumber % 3));
	var y_position = START_OFFSET + (BETWEEN_OFFSET * Math.floor(CircleNumber / 3));

	canvasContext.beginPath();
	canvasContext.arc(x_position, y_position, BALL_RADIUS, 0, 2 * Math.PI);

	canvasContext.fill()
	canvasContext.stroke()
}

function drawText(pattern_array) {
	var i = -1;

	canvasContext.fillStyle = '#FFFFFF'
	while (pattern_array[++i] != null) {
		canvasContext.fillText(i + 1, START_OFFSET + (BETWEEN_OFFSET * Math.floor(pattern_array[i] % 3)) - 8, START_OFFSET + (BETWEEN_OFFSET * Math.floor(pattern_array[i] / 3)) + 11)
	}
}

function drawLine(CircleNumberOne, CircleNumberTwo) {
	var x_position_cirle_one = START_OFFSET + (BETWEEN_OFFSET * Math.floor(CircleNumberOne % 3));
	var y_position_circle_one = START_OFFSET + (BETWEEN_OFFSET * Math.floor(CircleNumberOne / 3));

	var x_position_cirle_two = START_OFFSET + (BETWEEN_OFFSET * Math.floor(CircleNumberTwo % 3));
	var y_position_circle_two = START_OFFSET + (BETWEEN_OFFSET * Math.floor(CircleNumberTwo / 3));

	canvasContext.moveTo(x_position_cirle_one, y_position_circle_one);
	canvasContext.lineTo(x_position_cirle_two, y_position_circle_two);
	
	canvasContext.stroke();
}

function displayPattern(pattern) {
	var i = -1;
	var pattern_array;

	canvasContext.clearRect(0, 0, 500, 500);
	setProperties(canvasContext);
	
	pattern_array = pattern.slice(1, -1).split(',');
	while (pattern_array[++i] != null) {
		pattern_array[i] = parseInt(pattern_array[i]);

		drawLine(pattern_array[i], parseInt(pattern_array[i + 1]));
		drawCircle(pattern_array[i], i)
	}
	drawText(pattern_array);
	console.log('Pattern displayed.');
}

var canvasContext = initCanvas();