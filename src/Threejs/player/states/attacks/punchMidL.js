const { State, switchState } = require('Threejs/state');

const exit = () => {};

const enter = (prevState, animations, player) => {
  const currentAction = animations['punchMidL'].action;

  if (!prevState) {
    return currentAction.play();
  }

  const prevAction = animations[prevState.name].action;

  currentAction.enabled = true;

  currentAction.time = 0.0;
  currentAction.setEffectiveTimeScale(1.0);
  currentAction.setEffectiveWeight(1.0);
  currentAction.crossFadeFrom(prevAction, 0.5, true);
  currentAction.repetitions = 0;
  currentAction.play();
};

const update = (delta, player) => {
  const animationTime = player.animations[player.currentState.name].action.time;
  const animationDuration =
    player.animations[player.currentState.name].action._clip.duration;

  const stopClick = animationDuration <= animationTime;

  if (stopClick) {
    player.keys.leftClick = false;
  }

  if (player.keys.leftClick) {
    return;
  }

  switchState('exitPunch', player);

  return;
};

const punchMidLState = () => {
  const state = new State('punchMidL', enter, exit, update);

  return state;
};

export default punchMidLState;
