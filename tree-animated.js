import { Point } from './Point.js';
import { Draw } from './Draw.js';

const canvas = document.getElementById('canvas');
const draw = new Draw(canvas);

draw.setWidth(800);
draw.setHeight(800);

let time = 0;

function branch(start, length, angle) {
	if (length < 5) return;

	const end = new Point(
		start.x + Math.cos(angle) * length,
		start.y + Math.sin(angle) * length
	);

	draw.line(start, end, 'black');

	// Animated angle offset using sin(time)
	const sway = Math.sin(time * 0.02) * 0.4;

	branch(end, length * 0.7, angle + 0.5 + sway);
	branch(end, length * 0.7, angle - 0.3 - sway);
}

function animate() {
	draw.background('white');

	const start = new Point(draw.width / 2, draw.height - 20);
	const length = 150;
	const angle = -Math.PI / 2; // straight up

	branch(start, length, angle);

	time += 1;

	requestAnimationFrame(animate);
}

animate();
