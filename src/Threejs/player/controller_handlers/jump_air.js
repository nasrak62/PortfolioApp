import { handleWalk } from './walk';

const resetBounds = (player) => {
  if (player.model.position.y > player.movementAttrs.jumpHeight) {
    player.model.position.y = player.movementAttrs.jumpHeight;
    player.movementAttrs.jumpPeak = true;
  }

  if (player.model.position.y < 0) {
    player.model.position.y = 0;
    player.movementAttrs.finishJump = false;
  }
};

export const handleJumpAir = (delta, player, controllerAttrs) => {
  const canGoUp =
    !player.movementAttrs.finishJump && !player.movementAttrs.jumpPeak;
  const canGoDown =
    !player.movementAttrs.finishJump && player.movementAttrs.jumpPeak;

  if (player.model.position.y < player.movementAttrs.jumpHeight && canGoUp) {
    controllerAttrs.velocity.y +=
      controllerAttrs.acc.y * delta * player.movementAttrs.jumpSpeed;
  }

  if (player.model.position.y > 0 && canGoDown) {
    controllerAttrs.velocity.y -=
      controllerAttrs.acc.y * delta * player.movementAttrs.fallSpeed;
  }

  resetBounds(player);
  handleWalk(delta, player, controllerAttrs);
};
