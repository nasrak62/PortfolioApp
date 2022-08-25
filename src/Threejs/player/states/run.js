const { State, switchState } = require('Threejs/state');

const exit = () => {};

const enter = (prevState, animations) => {
  const currentAction = animations['run'].action;

  if (!prevState) {
    return currentAction.play();
  }

  const prevAction = animations[prevState.name].action;

  currentAction.enabled = true;

  if (prevState.Name == 'walk') {
    const ratio =
      currentAction.getClip().duration / prevAction.getClip().duration;

    currentAction.time = prevAction.time * ratio;
  } else {
    currentAction.time = 0.0;
    currentAction.setEffectiveTimeScale(1.0);
    currentAction.setEffectiveWeight(1.0);
  }

  currentAction.crossFadeFrom(prevAction, 0.5, true);
  currentAction.play();
};

const update = (delta, player) => {
  if ((player.keys.forward || player.keys.backward) && !player.keys.shift) {
    switchState('walk', player);
  }

  if (player.keys.forward || player.keys.backward) {
    return;
  }

  switchState('idle', player);
};

const runState = () => {
  const state = new State('run', enter, exit, update);

  return state;
};

export default runState;
