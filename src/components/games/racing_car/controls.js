export default class Controls {
  constructor(mainCar) {
    this.forward = false;
    this.backward = false;
    this.left = false;
    this.right = false;

    if (!mainCar) {
      this.forward = true;
    }
  }
}
