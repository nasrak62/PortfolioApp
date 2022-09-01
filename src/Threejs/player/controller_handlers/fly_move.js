import { handleWalk } from './walk';

const resetBounds = (player) => {
  if (player.model.position.y < 0) {
    player.model.position.y = 0;
  }
};

export const handleFlyMove = (delta, player, controllerAttrs) => {
  if (player.keys.space && !player.keys.backward) {
    controllerAttrs.velocity.y +=
      controllerAttrs.acc.y * delta * player.movementAttrs.flySpeed;
  }

  if (
    player.keys.space &&
    player.keys.backward &&
    player.model.position.y > 0
  ) {
    controllerAttrs.velocity.y -=
      controllerAttrs.acc.y * delta * player.movementAttrs.flySpeed;
  }

  resetBounds(player);
  handleWalk(delta, player, controllerAttrs, 'fly');
};
