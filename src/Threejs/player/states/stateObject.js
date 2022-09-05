import enterPunchState from './attacks/enterPunch';
import exitPunchState from './attacks/exitPunch';
import punchMidLState from './attacks/punchMidL';
import punchMidRState from './attacks/punchMidR';
import readyPunchState from './attacks/readyPunch';
import flyState from './fly';
import flyMoveState from './flyMove';
import idleState from './idle';
import jumpAirState from './jumpAir';
import jumpPrepareState from './jumpPrepare';
import runState from './run';
import walkState from './walk';

export const playerStates = {
  idle: idleState(),
  walk: walkState(),
  run: runState(),
  jumpPrepare: jumpPrepareState(),
  jumpAir: jumpAirState(),
  fly: flyState(),
  flyMove: flyMoveState(),
  punchMidR: punchMidRState(),
  punchMidL: punchMidLState(),
  exitPunch: exitPunchState(),
  enterPunch: enterPunchState(),
  readyPunch: readyPunchState(),
};
