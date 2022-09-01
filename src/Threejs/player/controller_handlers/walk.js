export const handleWalk = (delta, player, controllerAttrs, mode = 'walk') => {
  let playerSpeed = player.movementAttrs.walkSpeed;

  if (mode === 'fly') {
    playerSpeed = player.movementAttrs.walkSpeedFly;
  }

  const zAcceleration = controllerAttrs.acc.z * delta * playerSpeed;

  const yAcceleration = 4.0 * Math.PI * delta * controllerAttrs.acceleration.y;

  if (player.keys.forward && !player.keys.space) {
    controllerAttrs.velocity.z += zAcceleration;
  }

  if (player.keys.backward && !player.keys.space) {
    controllerAttrs.velocity.z -= zAcceleration;
  }

  if (player.keys.left && !player.keys.space) {
    controllerAttrs._A.set(0, 1, 0);
    controllerAttrs._Q.setFromAxisAngle(controllerAttrs._A, yAcceleration);

    controllerAttrs._R.multiply(controllerAttrs._Q);
  }

  if (player.keys.right && !player.keys.space) {
    controllerAttrs._A.set(0, 1, 0);
    controllerAttrs._Q.setFromAxisAngle(controllerAttrs._A, -yAcceleration);

    controllerAttrs._R.multiply(controllerAttrs._Q);
  }
};
