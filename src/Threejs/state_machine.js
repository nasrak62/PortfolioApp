export class State {
  constructor(parent, name, enter, exit, update) {
    this.parent = parent;
    this.name = name;
    this.enter = enter;
    this.exit = exit;
    this.update = update;
  }
}

export class StateMachine {
  constructor() {
    this.states = {};
    this.currentState = null;
  }

  switchState = (stateName, animations) => {
    console.log({ stateName, animations });
    console.log('in state name');
    const prevState = this.currentState;

    if (prevState && prevState.name == stateName) {
      return;
    }

    prevState && prevState.exit();

    const state = this.states[stateName];

    this.currentState = state;
    state.enter(prevState, animations);

    return this.currentState;
  };

  updateState(delta, input, stateMachine, animations) {
    this.currentState &&
      this.currentState.update(delta, input, stateMachine, animations);
  }
}
