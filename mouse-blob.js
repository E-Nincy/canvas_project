import { Point } from "./Point.js";
import { Draw } from "./Draw.js";

const canvas = document.getElementById("canvas");
const draw = new Draw(canvas);

draw.setWidth(window.innerWidth);
draw.setHeight(window.innerHeight);

let mouse = new Point(draw.width / 2, draw.height / 2);
let last = new Point(mouse.x, mouse.y);
let speed = 0;

window.addEventListener("mousemove", (e) => {
	last = mouse;
	mouse = new Point(e.clientX, e.clientY);

	// distance between last + current mouse pos
	const dx = mouse.x - last.x;
	const dy = mouse.y - last.y;

	speed = Math.sqrt(dx * dx + dy * dy);
});

function animate() {
	draw.background("white");

	const size = 20 + speed * 0.5;

	// Color changes with speed
	const red = Math.min(255, speed * 5);
	const blue = 200;
	const color = `rgb(${red}, 100, ${blue})`;

	draw.circle(mouse, size, color);

	requestAnimationFrame(animate);
}

animate();
