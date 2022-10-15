import { isEmpty } from 'utils/lodash';
import Controls from './controls';
import { NeuralNetwork } from './network';
import Sensor from './sensor';
import { calculatePoint, drawPolygon, polysIntersect } from './utils';

export default class Car {
  constructor(
    x,
    y,
    width,
    height,
    canvas,
    controlType = 'NPC',
    speed = 2,
    maxSpeed = 8,
    acceleration = 0.2,
    friction = 0.05,
    angle = 0.05,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.canvas = canvas;

    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.acceleration = acceleration;
    this.friction = friction;
    this.angle = angle;
    this.controlType = controlType;
    this.useBrain = controlType === 'AI';
    this.mainCar = controlType && controlType !== 'NPC';

    this.polygon = [];
    this.damaged = false;

    this.addSensors();
    this.addBrain();

    this.controls = new Controls(this.mainCar);
  }

  addSensors() {
    if (this.controlType !== 'NPC') {
      this.sensor = new Sensor(this);
    }
  }

  addBrain() {
    if (this.controlType === 'AI') {
      this.brain = new NeuralNetwork([this.sensor.rayCount, 6, 4]);
    }
  }

  checkBoundaries() {
    if (this.x < 0) {
      this.x = 0;
    }

    if (this.x > this.canvas.width) {
      this.x = this.canvas.width;
    }
  }

  addFriction() {
    if (this.speed > 0) {
      this.speed -= this.friction;
    }

    if (this.speed < 0) {
      this.speed += this.friction;
    }

    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }
  }

  updateAngle() {
    const flip = this.speed >= 0 ? 1 : -1;

    if (this.controls.left) {
      this.angle += Math.abs(this.speed / 100) * flip;
    }

    if (this.controls.right) {
      this.angle -= Math.abs(this.speed / 100) * flip;
    }
  }

  addAcceleration() {
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }

    if (this.controls.backward) {
      this.speed -= this.acceleration;
    }
  }

  applyMovementToAxis() {
    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
  }

  updateSpeedAfterMovement() {
    if (this.speed >= this.maxSpeed) {
      this.speed = this.maxSpeed;
    }

    if (this.speed <= (-1 * this.maxSpeed) / 2) {
      this.speed = (-1 * this.maxSpeed) / 2;
    }

    this.addFriction();
  }

  move() {
    this.addAcceleration();
    this.updateAngle();
    this.applyMovementToAxis();
    this.checkBoundaries();
    this.updateSpeedAfterMovement();
  }

  createPolygon() {
    const rad = Math.hypot(this.width, this.height) / 2;
    const alpha = Math.atan2(this.width, this.height);

    this.polygon = [
      calculatePoint(this.x, this.y, this.angle, alpha, '-', rad),
      calculatePoint(this.x, this.y, this.angle, alpha, '+', rad),
      calculatePoint(this.x, this.y, this.angle, alpha, '-', rad, true),
      calculatePoint(this.x, this.y, this.angle, alpha, '+', rad, true),
    ];
  }

  assessDamage(roadBorders, traffic) {
    for (const border of roadBorders) {
      if (polysIntersect(this.polygon, border)) {
        return true;
      }
    }

    for (const car of traffic) {
      if (polysIntersect(this.polygon, car.polygon) && this.mainCar) {
        return true;
      }
    }

    return false;
  }

  handleSensor(action, roadBorders, ctx = null, traffic = []) {
    if (!this.mainCar || !this.sensor) {
      return;
    }

    if (action === 'update' && roadBorders) {
      this.sensor.update(roadBorders, traffic);
      const offsets = this.sensor.readings.map((reading) =>
        reading === null ? 0 : 1 - reading.offset,
      );

      const outputs = NeuralNetwork.feedForward(offsets, this.brain);

      if (this.useBrain) {
        this.controls.forward = outputs[0];
        this.controls.left = outputs[1];
        this.controls.right = outputs[2];
        this.controls.backward = outputs[3];
      }
    }

    if (action === 'draw' && ctx) {
      return this.sensor.draw(ctx);
    }
  }

  update(roadBorders, traffic = []) {
    if (this.damaged) {
      this.handleSensor('update', roadBorders, null, traffic);

      return;
    }

    this.move();
    this.createPolygon();
    this.damaged = this.assessDamage(roadBorders, traffic);
    this.handleSensor('update', roadBorders, null, traffic);
  }

  drawCar(ctx, color = 'black') {
    const canContinue = this.polygon?.length >= 2;

    if (!canContinue) {
      console.log('car error');

      return;
    }

    const [firstPoint, ...remainingPoints] = this.polygon;

    ctx.fillStyle = this.damaged ? 'gray' : color;

    drawPolygon(ctx, firstPoint, remainingPoints);
  }

  draw(ctx, color = 'black', drawSensor = false) {
    isEmpty(this.polygon) && this.createPolygon();

    this.drawCar(ctx, color);
    drawSensor && this.handleSensor('draw', null, ctx);
  }
}
