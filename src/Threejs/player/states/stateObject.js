import idleState from './idle';
import jumpPrepareState from './jumpPrepare';
import runState from './run';
import walkState from './walk';

export const playerStates = {
  idle: idleState(),
  walk: walkState(),
  run: runState(),
  jumpPrepare: jumpPrepareState(),
};
