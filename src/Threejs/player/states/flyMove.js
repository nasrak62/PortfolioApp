const { State, switchState } = require('Threejs/state');

const exit = () => {};

const enter = (prevState, animations, player) => {
  const currentAction = animations['flyMove'].action;

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
  if (player.keys.forward && !player.keys.backward) {
    return;
  }

  switchState('fly', player);

  return;
};

const flyMoveState = () => {
  const state = new State('flyMove', enter, exit, update);

  return state;
};

export default flyMoveState;
