// bouncing-balls.js
import { Point } from './Point.js';
import { Draw } from './Draw.js';
import { BouncingBall } from './BouncingBall.js';

const canvas = document.getElementById('canvas');
const draw = new Draw(canvas);

draw.setWidth(300);
draw.setHeight(300);

const balls = [];

// avoid starting inside walls
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

for (let i = 0; i < 100; i++) {
    const radius = Math.random() * 20;

    balls.push(
        new BouncingBall(
            new Point(
                clamp(Math.random() * draw.width, radius + 1, draw.width - radius - 1),
                clamp(Math.random() * draw.height, radius + 1, draw.height - radius - 1)
            ),
            new Point(Math.random() * 10 - 5, Math.random() * 10 - 5), // speed random
            radius,
            new Point(draw.width, draw.height)
        )
    );
}

function animate() {
    draw.background('gold');

    balls.forEach(ball => {
        ball.move();
        draw.circle(ball.position, ball.radius, 'black'); 
    });

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
