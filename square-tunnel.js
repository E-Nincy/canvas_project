// square-tunnel.js
import { Point } from './Point.js';
import { Draw } from './Draw.js';

const BACKGROUND_COLOR = 'gold';

const canvas = document.getElementById('canvas');
const draw = new Draw(canvas);
draw.setWidth(300);
draw.setHeight(300);

// fondo
draw.background(BACKGROUND_COLOR);

// punto inicial
const startPoint = new Point(50, 50);

// función recursiva
function tunnel(point, w, h) {
	// STOP condition (important)
	if (w < 5 || h < 5) return;

	// draw rectangle
	draw.rectangle(point, w, h, 'black');

	// move the point for next recursion
	point.add(new Point(3, 3));

	// shrink width and height
	tunnel(point, w * 0.95, h * 0.95);
}

// initial call
tunnel(startPoint, 200, 200);
