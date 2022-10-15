import Point from './point';
import { drawLine, lerp } from './utils';

export default class Road {
  constructor(x, width, laneCount = 3) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;
    this.left = x - width / 2;
    this.right = x + width / 2;

    const infinity = 1000000;
    this.bottom = infinity;
    this.top = -1 * infinity;

    const topLeft = new Point(this.left, this.top);
    const bottomLeft = new Point(this.left, this.bottom);

    const topRight = new Point(this.right, this.top);
    const bottomRight = new Point(this.right, this.bottom);

    this.borders = [
      [topLeft, bottomLeft],
      [topRight, bottomRight],
    ];
  }

  lineDashArray(laneIndex) {
    const notFirstLane = laneIndex > 0;
    const notLastLane = laneIndex < this.laneCount;

    if (notFirstLane && notLastLane) {
      return [20, 20];
    }

    return [];
  }

  drawLine(ctx, direction, laneIndex) {
    ctx.setLineDash(this.lineDashArray(laneIndex));

    const start = new Point(direction, this.top);
    const end = new Point(direction, this.bottom);

    drawLine(ctx, start, end);
  }

  drawBorders(ctx) {
    ctx.setLineDash([]);

    this.borders.forEach((border) => {
      drawLine(ctx, border[0], border[1]);
    });
  }

  getLaneCenter(laneIndex) {
    const laneWidth = this.width / this.laneCount;
    const currentIndex = Math.max(0, Math.min(laneIndex, this.laneCount - 1));

    return this.left + laneWidth / 2 + laneWidth * currentIndex;
  }

  drawCenterLines(ctx) {
    for (let i = 1; i <= this.laneCount - 1; i++) {
      const x = lerp(this.left, this.right, i / this.laneCount);

      this.drawLine(ctx, x, i);
    }
  }

  setLineStyle(ctx) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'white';
  }

  draw(ctx) {
    this.setLineStyle(ctx);
    this.drawCenterLines(ctx);
    this.drawBorders(ctx);
  }
}
