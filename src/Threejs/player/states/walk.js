const { State } = require('Threejs/state_machine');

const exit = () => {};

const enter = (prevState, animations) => {
  console.log({ animations });
  const currentAction = animations['walk'].action;

  if (!prevState) {
    return currentAction.play();
  }

  const prevAction = animations[prevState.name].action;

  currentAction.enabled = true;

  if (prevState.Name == 'run') {
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

const update = (delta, keys, stateMachine, animations) => {
  console.log(keys);
  if (keys.forward || keys.backward) {
    if (keys.shift) {
      stateMachine.currentState = stateMachine.switchState('run', animations);
    }
    return;
  }

  stateMachine.currentState = stateMachine.switchState('idle', animations);
};

const walkState = (parent) => {
  const state = new State(parent, 'walk', enter, exit, update);

  return state;
};

export default walkState;
