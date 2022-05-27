import { randomRange } from "./math";

class Star {
  constructor(
    x,
    y,
    radius,
    color,
    ctx,
    canvas,
    velocity = 1,
    erosion = 0.2,
    expansion = 1
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.ctx = ctx;
    this.erosion = erosion;
    this.canvas = canvas;
    this.explosionStarted = false;
    this.explosionEnded = false;
    this.velocity = velocity;
    this.explosionHeight = randomRange(this.radius * 2, this.canvas.height / 4);

    this.explosionWidth = randomRange(this.radius * 2, this.canvas.width / 4);

    this.expansion = expansion;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  beforeExplosion() {
    if (this.y + this.radius + this.velocity >= this.canvas.height) {
      this.radius = randomRange(
        3,
        Math.max(this.explosionHeight / 2, this.explosionWidth / 2)
      );

      this.y = this.canvas.height - this.radius;
      this.explosionStarted = true;

      return;
    }

    this.y += this.velocity;

    if (this.radius - this.erosion > 1) {
      this.radius -= this.erosion;
    }

    if (this.radius < 1) {
      this.radius = 1;
    }
  }

  afterExplosion() {
    const expand = this.radius < this.explosionHeight && this.explosionWidth;

    if (expand) {
      this.radius += this.expansion;
      return;
    }

    this.radius = 0;
    this.explosionEnded = true;
  }

  update() {
    this.draw();

    if (!this.explosionStarted) {
      return this.beforeExplosion();
    }

    return this.afterExplosion();
  }
}

export default Star;
