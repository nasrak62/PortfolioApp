const { State } = require('Threejs/state_machine');

const exit = () => {};

const enter = (prevState, animations) => {
  const idleAction = animations['idle'].action;

  if (prevState) {
    const prevAction = animations[prevState.name].action;
    idleAction.time = 0.0;
    idleAction.enabled = true;
    idleAction.setEffectiveTimeScale(1.0);
    idleAction.setEffectiveWeight(1.0);
    idleAction.crossFadeFrom(prevAction, 0.5, true);
    idleAction.play();
  } else {
    idleAction.play();
  }
};

const update = (delta, keys, stateMachine, animations) => {
  if (keys.forward || keys.backward) {
    return (stateMachine.currentState = stateMachine.switchState(
      'walk',
      animations,
    ));
  }

  if (keys.space) {
    return (stateMachine.currentState = stateMachine.switchState(
      'jump',
      animations,
    ));
  }
};

const idleState = (parent) => {
  const state = new State(parent, 'walk', enter, exit, update);

  return state;
};

export default idleState;
