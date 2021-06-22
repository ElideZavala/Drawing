const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

let size = 20;
let color = 'black';

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
	ctx.lineWidth = size;
	ctx.stroke();
}

drawCircle(100, 200);
drawLine(300, 300, 300, 500);