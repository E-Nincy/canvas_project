// recursive-tree.js
import { Point } from './Point.js';
import { Draw } from './Draw.js';

const canvas = document.getElementById('canvas');
const draw = new Draw(canvas);

// canvas size
draw.setWidth(800);
draw.setHeight(800);

draw.background('white');

// constants
const GOLDEN_RATIO = 1.61803398875;
const startingAngle = -Math.PI / 2;
const startLength = draw.height / 3;

// begin point
const startPoint = new Point(draw.width / 2, draw.height - 50);

// recursive function
function branch(point, length, angle) {
	if (length < 2) return;

	// calculate end point
	const end = new Point(
		point.x + Math.cos(angle) * length,
		point.y + Math.sin(angle) * length
	);

	// draw line
	draw.line(point, end, 'black');

	// RECURSION
    branch(end, length / GOLDEN_RATIO, angle + 0.45);
	branch(end, length / GOLDEN_RATIO, angle - 0.3);
}

// call the function to start
branch(startPoint, startLength, startingAngle);
