import idleState from './idle';
import runState from './run';
import walkState from './walk';

export const playerStates = {
  idle: idleState(),
  walk: walkState(),
  run: runState(),
};
