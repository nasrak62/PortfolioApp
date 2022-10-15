export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class OffsetPoint {
  constructor(x, y, offset) {
    this.x = x;
    this.y = y;
    this.offset = offset;
  }
}
