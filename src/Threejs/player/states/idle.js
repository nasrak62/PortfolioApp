import { getPunch } from './attacks/utils';

const { State, switchState } = require('Threejs/state');

const exit = () => {};

const enter = (prevState, animations, player) => {
  const idleAction = animations['idle'].action;
  if (!idleAction) {
    return;
  }

  if (prevState) {
    const prevAction = animations[prevState.name].action;
    idleAction.reset();
    idleAction.time = 0.0;
    idleAction.enabled = true;
    idleAction.setEffectiveTimeScale(1.0);
    idleAction.setEffectiveWeight(1.0);
    idleAction.crossFadeFrom(prevAction, 0.5, true);
    idleAction.play();
  } else {
    idleAction.reset();
    idleAction.time = 0.0;
    idleAction.enabled = true;
    idleAction.setEffectiveTimeScale(1.0);
    idleAction.setEffectiveWeight(1.0);
    idleAction.play();
  }
};

const update = (delta, player) => {
  if (player.keys.leftClick) {
    switchState(getPunch(), player);

    return;
  }

  if (player.keys.forward || player.keys.backward) {
    switchState('walk', player);

    return;
  }

  if (player.keys.space && !player.keys.backward) {
    switchState('jumpPrepare', player);

    return;
  }

  return;
};

const idleState = () => {
  const state = new State('idle', enter, exit, update);

  return state;
};

export default idleState;
