/* eslint-disable no-unused-vars */
import { switchState } from 'Threejs/state';

export const handleMixer = (e, player) => {
  const currentAction = e?.action;

  if (!currentAction) {
    return;
  }

  const name = currentAction?._clip?.name?.split('-')?.[1];

  if (!name) {
    return;
  }

  console.log({ name, leftClick: player.keys.leftClick });

  if (name === 'punchMidR') {
    player.keys.leftClick = false;
  }

  if (name === 'punchMidL') {
    player.keys.leftClick = false;
  }
};

const handleKeys = (e, player, value) => {
  switch (e.keyCode) {
    case 87: // w
      player.keys.forward = value;
      break;
    case 65: // a
      player.keys.left = value;
      break;
    case 83: // s
      player.keys.backward = value;
      break;
    case 68: // d
      player.keys.right = value;
      break;
    case 32: // SPACE
      player.keys.space = value;
      break;
    case 16: // SHIFT
      player.keys.shift = value;
      break;
  }
};

const handleClick = (e, player) => {
  player.keys.leftClick = true;
  player.times.attackTime = performance.now();
  console.log(player);
};

const getInput = (player) => {
  window.addEventListener('keydown', (e) => handleKeys(e, player, true), false);
  window.addEventListener('keyup', (e) => handleKeys(e, player, false), false);

  window.addEventListener('click', (e) => handleClick(e, player), false);
};

export default getInput;
