// const handleClick = (actionPunch, idleAction) => {
//   actionPunch.reset().play();

//   idleAction
//     .reset()
//     .setEffectiveTimeScale(1)
//     .setEffectiveWeight(1)
//     .fadeIn(0.7)
//     .play();
// };

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

const handleClick = (e, player, value) => {
  player.keys.leftClick = true;
};

const getInput = (player) => {
  window.addEventListener('keydown', (e) => handleKeys(e, player, true), false);
  window.addEventListener('keyup', (e) => handleKeys(e, player, false), false);

  window.addEventListener('click', (e) => handleClick(e, player, true), false);
};

export default getInput;
