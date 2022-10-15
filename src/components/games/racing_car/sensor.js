import { isEmpty } from 'utils/lodash';
import Point from './point';
import { lerp, drawLine, getIntersection } from './utils';

export default class Sensor {
  constructor(car) {
    this.car = car;
    this.rayCount = 5;
    this.rayLength = 150;
    this.raySpread = Math.PI / 2;
    this.rays = [];
    this.readings = [];
  }

  castRays() {
    this.rays = [];

    for (let i = 0; i < this.rayCount; i++) {
      const acceleration = this.rayCount == 1 ? 0.5 : i / (this.rayCount - 1);

      let rayAngle = lerp(
        this.raySpread / 2,
        -this.raySpread / 2,
        acceleration,
      );

      rayAngle += this.car.angle;

      const start = new Point(this.car.x, this.car.y);
      const endX = this.car.x - Math.sin(rayAngle) * this.rayLength;
      const endY = this.car.y - Math.cos(rayAngle) * this.rayLength;
      const end = new Point(endX, endY);

      this.rays.push([start, end]);
    }
  }

  checkBorders(ray, roadBorders, touches) {
    for (let i = 0; i < roadBorders.length; i++) {
      const touchBorder = getIntersection(
        ray[0],
        ray[1],
        roadBorders[i][0],
        roadBorders[i][1],
      );

      if (touchBorder) {
        touches.push(touchBorder);
      }
    }
  }

  checkTraffic(ray, traffic, touches) {
    for (let i = 0; i < traffic.length; i++) {
      const polygon = traffic[i].polygon;

      for (let j = 0; j < polygon.length; j++) {
        const index = (j + 1) % polygon.length;

        const touchTraffic = getIntersection(
          ray[0],
          ray[1],
          polygon[j],
          polygon[index],
        );

        if (touchTraffic) {
          touches.push(touchTraffic);
        }
      }
    }
  }

  getReading(ray, roadBorders, traffic = []) {
    let touches = [];
    this.checkBorders(ray, roadBorders, touches);
    this.checkTraffic(ray, traffic, touches);

    if (touches.length == 0) {
      return null;
    }

    const offsets = touches.map((touch) => touch.offset);
    const minOffset = Math.min(...offsets);

    return touches.find((touch) => touch.offset === minOffset);
  }

  getReadings(roadBorders, traffic = []) {
    this.readings = [];

    for (let i = 0; i < this.rays.length; i++) {
      const reading = this.getReading(this.rays[i], roadBorders, traffic);
      this.readings.push(reading);
    }
  }

  update(roadBorders, traffic = []) {
    this.castRays();
    this.getReadings(roadBorders, traffic);
  }

  draw(ctx) {
    if (!this.rays || isEmpty(this.rays)) {
      return;
    }

    for (var i = 0; i < this.rayCount; i++) {
      const start = this.rays[i][0];
      const currentReading = this.readings[i];
      const end = currentReading || this.rays[i][1];

      ctx.lineWidth = 2;
      ctx.strokeStyle = 'yellow';
      drawLine(ctx, start, end);

      ctx.lineWidth = 2;
      ctx.strokeStyle = 'black';
      drawLine(ctx, this.rays[i][1], end);
    }
  }
}
