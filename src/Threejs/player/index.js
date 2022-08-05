import addModel from 'Threejs/add_model';
import { addAnimationWithManager } from 'Threejs/add_animation';
import THREE from 'Threejs/three';

import Remy from '../../assets/Man/ybot.fbx';
import Idle from '../../assets/Man/Ready Idle.fbx';
// import RightPunch from '../../assets/Man/PunchingRight.fbx';
import getInput from './event_handlers';
import { StateMachine } from 'Threejs/state_machine';
import walkState from './states/walk';
import Controller from './controller';
import Walk from '../../assets/Man/Standard Walk.fbx';
import idleState from './states/idle';

const mapKeysToPlayer = () => ({
  left: false,
  right: false,
  backward: false,
  forward: false,
  space: false,
  shift: false,
});

const addPlayer = async (scene, mixers) => {
  const player = {};
  player.keys = mapKeysToPlayer();
  player.model = await addModel(scene, Remy);
  // player.actions = {};
  player.mixers = {};
  player.mixer = new THREE.AnimationMixer(player.model);

  player.stateMachine = new StateMachine();

  player.stateMachine.states = {
    idle: idleState(player.stateMachine),
    walk: walkState(player.stateMachine),
    // rightPunch: RightPunch,
  };

  player.manager = new THREE.LoadingManager();
  player.manager.onLoad = () => {
    console.log('onload', { animations: player.animations });

    player.stateMachine.currentState = player.stateMachine.switchState(
      'idle',
      player.animations,
    );
  };

  player.animations = { idle: { action: null, clip: null } };
  player.animationObject = {
    idle: Idle,
    walk: Walk,
    // rightPunch: RightPunch,
  };

  await addAnimationWithManager(
    player.mixer,
    player.animations,
    player.manager,
    player.animationObject,
  );

  console.log({ animations: player.animations });

  player.controller = new Controller(
    player.keys,
    player.stateMachine,
    player.model,
    player.mixer,
  );

  console.log(mixers);

  getInput(player);

  return player;
};

export default addPlayer;
