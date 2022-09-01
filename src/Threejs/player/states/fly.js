const { State, switchState } = require('Threejs/state');

const exit = () => {};

const enter = (prevState, animations, player) => {
  const currentAction = animations['fly'].action;

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
  if (player.model.position.y === 0) {
    switchState('idle', player);

    return;
  }

  if (player.keys.forward && !player.keys.backward) {
    switchState('flyMove', player);

    return;
  }

  return;
};

const flyState = () => {
  const state = new State('fly', enter, exit, update);

  return state;
};

export default flyState;
