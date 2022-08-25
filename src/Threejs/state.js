export class State {
  constructor(name, enter, exit, update) {
    this.name = name;
    this.enter = enter;
    this.exit = exit;
    this.update = update;
  }
}

export const switchState = (stateName, player) => {
  const prevState = player.currentState;

  if (prevState && prevState.name == stateName) {
    return;
  }

  prevState && prevState.exit();

  const state = player.states[stateName];
  player.currentState = state;
  state.enter(prevState, player.animations);
};

export const updateState = (delta, player) => {
  player.currentState && player.currentState.update(delta, player);
};
