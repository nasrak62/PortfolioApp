export const mapKeysToPlayer = () => ({
  left: false,
  right: false,
  backward: false,
  forward: false,
  space: false,
  shift: false,
  rightClick: false,
  leftClick: false,
});

const animationsTime = {
  idle: 1,
  walk: 1.2,
  run: 1.5,
  jumpPrepare: 1,
  jumpAir: 1,
  fly: 1,
  flyMove: 1,
  exitPunch: 1,
  enterPunch: 1,
  readyPunch: 1,
  punchMidR: 2,
  punchMidL: 2,
};

export const initialTimes = {
  attackTime: null,
  attackModeTime: 3000,
  animationsTime: animationsTime,
};
