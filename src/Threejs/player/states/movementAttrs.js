const jumpHeight = 100;
const fallBasicSpeed = 1000 * 4;

const calculateFallSpeed = (player) => {
  const acceleration = 9.8;
  const currentJumpHeight = player?.movementAttrs?.jumpHeight || jumpHeight;

  const currentFallBasicSpeed =
    player?.movementAttrs?.fallBasicSpeed || fallBasicSpeed;

  const deltaHeight = Math.abs(player.model.position.y - currentJumpHeight);

  const freeFallVelocity = Math.sqrt(2 * acceleration * deltaHeight);

  return freeFallVelocity * currentFallBasicSpeed;
};

export const movementAttrs = (player) => ({
  finishJump: false,
  jumpPeak: false,
  jumpSpeed: 10000 * 4,
  flySpeed: 5000 * 4,
  walkSpeedFly: 1000,
  jumpHeight: jumpHeight,
  walkSpeed: 10,
  fallBasicSpeed: fallBasicSpeed,
  fallSpeed: calculateFallSpeed(player),
});
