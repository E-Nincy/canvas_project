// square-fractal.js
import { Point } from './Point.js';
import { Draw } from './Draw.js';

const BACKGROUND_COLOR = 'gold';

const canvas = document.getElementById('canvas');
const draw = new Draw(canvas);

// big canvas for fractal
draw.setWidth(1000);
draw.setHeight(1000);

// background
draw.background(BACKGROUND_COLOR);

// center of canvas
const startPoint = new Point(500, 500);

function fractal(point, w, h) {
	if (w < 2 || h < 2) return;

	// draw centered rectangle
	draw.centerRectangle(point, w, h, 'black');

	// 4 points: the “corners”
	const quarters = [
		new Point(point.x - w / 4, point.y - h / 4),
		new Point(point.x + w / 4, point.y - h / 4),
		new Point(point.x - w / 4, point.y + h / 4),
		new Point(point.x + w / 4, point.y + h / 4)
	];

	// recurse!
	quarters.forEach((p) => fractal(p, w / 2.5, h / 2.5));
}

// start
fractal(startPoint, 950, 950);
