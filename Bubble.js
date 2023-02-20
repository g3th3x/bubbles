import { getRandomInt } from "./getRandomInt.js";

export class Bubble {
  constructor(ctx, x, y, radius, dx, dy, color) {
    this.speed = getRandomInt(5, 10);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.ctx = ctx;
    this.color = color;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // this.ctx.strokeStyle = this.color;
    // this.ctx.stroke();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
  update() {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;

    this.draw();
  }
}
