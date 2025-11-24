// basics.js
import { Point } from './Point.js';
import { Draw } from './Draw.js';

const canvas = document.getElementById('canvas');
const draw = new Draw(canvas);

draw.setWidth(300);
draw.setHeight(300);

draw.background('#272822');

// squares
let [r, g, b] = [150, 150, 117];

for (let i = 0; i < 250; i += 5) {
	const position = new Point(i, i);
	draw.rectangle(position, 50, 50, `rgb(${r}, ${g}, ${b})`);
	r -= 1;
	g -= 2;
	b -= 3;
}

// line
draw.line(new Point(250, 30), new Point(50, 250), '#AE81DB');

// triangles
const point1 = new Point(290, 50);
const point2 = new Point(290, 50);
const point3 = new Point(290, 90);

let [red, green, blue] = [200, 255, 255];

for (let i = 0; i < 20; i++) {
	draw.triangle(point1, point2, point3, `rgb(${red}, ${green}, ${blue})`);
	point1.add(new Point(-5, 3));
	point2.add(new Point(-6, 3));
	point3.add(new Point(-7, -1));
	red -= 1;
	green -= 2;
	blue -= 3;
}

// circles
const center = new Point(30, 200);
let radius = 3;

// reset circle colors
[r, g, b] = [150, 150, 117];

for (let i = 0; i < 20; i++) {
	draw.circle(center, radius, `rgb(${r}, ${g}, ${b})`);
	center.add(new Point(5, 3));
	radius += 1;
	r -= 1;
	g -= 2;
	b -= 10;
}


