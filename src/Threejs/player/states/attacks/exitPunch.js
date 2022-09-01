const { State, switchState } = require('Threejs/state');

const exit = () => {};

const enter = (prevState, animations, player) => {
  const currentAction = animations['exitPunch'].action;

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
  console.log(currentAction);
  currentAction.play();
};

const update = (delta, player) => {
  const animationTime = player.animations[player.currentState.name].action.time;
  const animationDuration =
    player.animations[player.currentState.name].action._clip.duration;

  const stopClick = animationDuration <= animationTime;

  const isRunning =
    player.animations[player.currentState.name].action.isRunning();

  if (!isRunning) {
    switchState('idle', player);
  }

  return;
};

const exitPunchState = () => {
  const state = new State('exitPunch', enter, exit, update);

  return state;
};

export default exitPunchState;
