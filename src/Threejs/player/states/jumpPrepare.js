/* eslint-disable no-unused-vars */
const { State, switchState } = require('Threejs/state');

const exit = () => {};

const enter = (prevState, animations, player) => {
  const currentAction = animations['jumpPrepare'].action;

  if (!prevState) {
    return currentAction.play();
  }

  const prevAction = animations[prevState.name].action;

  currentAction.enabled = true;

  currentAction.time = 0.0;
  currentAction.setEffectiveTimeScale(1.0);
  currentAction.setEffectiveWeight(1.0);
  currentAction.crossFadeFrom(prevAction, 0.5, true);
  currentAction.play();
};

const update = (delta, player) => {
  if (player.keys.space && !player.keys.backward) {
    return;
  }

  if (player.keys.space && player.keys.backward) {
    switchState('idle', player);

    return;
  }

  player.movementAttrs.jumpPeak = false;
  player.movementAttrs.finishJump = false;

  switchState('jumpAir', player);

  return;
};

const jumpPrepareState = () => {
  const state = new State('jumpPrepare', enter, exit, update);

  return state;
};

export default jumpPrepareState;
