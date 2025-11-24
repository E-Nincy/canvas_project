// Draw.js
export class Draw {
	constructor(element) {
		this.canvas = element;
		this.ctx = element.getContext('2d');
		this.width = element.width;
		this.height = element.height;
	}

	background(color) {
		this.ctx.fillStyle = color;
		this.ctx.fillRect(0, 0, this.width, this.height);
	}

	rectangle(point, w, h, color) {
		this.ctx.strokeStyle = color;
		this.ctx.strokeRect(point.x, point.y, w, h);
	}

	triangle(point1, point2, point3, color = '#AE81DB') {
		this.ctx.strokeStyle = color;
		this.ctx.beginPath();
		this.ctx.moveTo(point1.x, point1.y);
		this.ctx.lineTo(point2.x, point2.y);
		this.ctx.lineTo(point3.x, point3.y);
		this.ctx.lineTo(point1.x, point1.y);
		this.ctx.stroke();
	}

	circle(point, r, color) {
		this.ctx.strokeStyle = color;
		this.ctx.beginPath();
		this.ctx.arc(point.x, point.y, r, 0, Math.PI * 2);
		this.ctx.stroke();
	}

	line(point1, point2, color = 'black') {
		this.ctx.strokeStyle = color;
		this.ctx.beginPath();
		this.ctx.moveTo(point1.x, point1.y);
		this.ctx.lineTo(point2.x, point2.y);
		this.ctx.stroke();
	}

	setWidth(width) {
		this.canvas.width = width;
		this.width = width;
	}

	setHeight(height) {
		this.canvas.height = height;
		this.height = height;
	}

    fillCircle(point, r, color) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, r, 0, Math.PI * 2);
        this.ctx.fill();
    }

    centerRectangle(point, w, h, color = 'black') {
        const xTopLeft = point.x - w / 2;
        const yTopLeft = point.y - h / 2;
        this.ctx.strokeStyle = color;
        this.ctx.strokeRect(xTopLeft, yTopLeft, w, h);
    }
}
