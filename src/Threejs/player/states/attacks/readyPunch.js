import { getPunch } from './utils';

const { State, switchState } = require('Threejs/state');

const exit = () => {};

const enter = (prevState, animations, player) => {
  const currentAction = animations['readyPunch'].action;

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
  currentAction.play();
};

const update = (delta, player) => {
  const elapsedTime = performance.now() - player.times.attackTime;

  if (player.keys.leftClick) {
    switchState(getPunch(), player);

    return;
  }

  if (elapsedTime >= player.times.attackModeTime) {
    switchState('idle', player);

    return;
  }

  return;
};

const readyPunchState = () => {
  const state = new State('readyPunch', enter, exit, update);

  return state;
};

export default readyPunchState;
