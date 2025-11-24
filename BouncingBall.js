// BouncingBall.js

import { Point } from './Point.js';

export class BouncingBall {
	constructor(position, speed, radius, canvasSize) {
		this.position = position;   // Point(x, y)
		this.speed = speed;         // Point(xSpeed, ySpeed)
		this.radius = radius;       // number
		this.canvasSize = canvasSize; // Point(width, height)
	}

	move() {
		// horizontal bounce
		if (
			this.position.x + this.radius >= this.canvasSize.x ||
			this.position.x - this.radius <= 0
		) {
			this.speed.x *= -1;
		}

		// vertical bounce
		if (
			this.position.y + this.radius >= this.canvasSize.y ||
			this.position.y - this.radius <= 0
		) {
			this.speed.y *= -1;
		}

		// update position
		this.position.x += this.speed.x;
		this.position.y += this.speed.y;
	}
}
