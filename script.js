const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const canvas = document.getElementById('canvas');
const canvas = document.getElementById('canvas');
const canvas = document.getElementById('canvas');
const canvas = document.getElementById('canvas');
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext("2d");

let size = 20;
let isPressed = false;
let color = 'black';
let x
let y

// Cuando presionamos el mouse
canvas.addEventListener('mousedown', (e) => {
	isPressed = true;

	x = e.offsetX;
	y = e.offsetY;
})

// Cuando soltamos el mouse
canvas.addEventListener('mouseup', (e) => {
	isPressed = false;

	x = undefined;
	y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
	if (isPressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;

		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);

		x = x2;
		y = y2;
	}
})

// Creamos un circulo. 
function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2); // Círculo externo
	ctx.fillStyle = color;
	ctx.fill();
}

// Creamos un nuevo trazo que se podra mover por las cordenadas x&y.
function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
	ctx.stroke();
}