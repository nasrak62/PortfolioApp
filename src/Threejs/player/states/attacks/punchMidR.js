/* eslint-disable no-unused-vars */
const { State, switchState } = require('Threejs/state');

const exit = () => {};

const enter = (prevState, animations, player) => {
  const currentAction = animations['punchMidR'].action;

  if (!prevState) {
    return currentAction.play();
  }

  const prevAction = animations[prevState.name].action;

  currentAction.reset();
  currentAction.time = 0.0;
  currentAction.enabled = true;
  currentAction.setEffectiveTimeScale(1.0);
  currentAction.setEffectiveWeight(1.0);
  currentAction.crossFadeFrom(prevAction, 0.5, true);
  currentAction.repetitions = 0;
  currentAction.clampWhenFinished = true;
  currentAction.play();
};

const update = (delta, player) => {
  const elapsedTime = performance.now() - player.times.attackTime;

  if (elapsedTime >= player.times.attackModeTime) {
    player.keys.leftClick = false;
    switchState('idle', player);

    return;
  }

  if (player.keys.leftClick) {
    return;
  }

  switchState('readyPunch', player);

  return;
};

const punchMidRState = () => {
  const state = new State('punchMidR', enter, exit, update);

  return state;
};

export default punchMidRState;
