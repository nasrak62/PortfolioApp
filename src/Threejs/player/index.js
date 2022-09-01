import addModel from 'Threejs/add_model';
import THREE from 'Threejs/three';
import Remy from '../../assets/Man/Base3.glb';
import getInput from './event_handlers';
import { movementAttrs } from './states/movementAttrs';
import { playerStates } from './states/stateObject';

const mapKeysToPlayer = () => ({
  left: false,
  right: false,
  backward: false,
  forward: false,
  space: false,
  shift: false,
  rightClick: false,
  leftClick: false,
});

const addPlayer = async (scene, mixers) => {
  const player = {};
  player.keys = mapKeysToPlayer();
  player.states = { ...playerStates };
  player.animations = { idle: { action: null, clip: null } };
  player.mixers = mixers;

  player.cameraAttrs = {
    currentCameraPosition: new THREE.Vector3(),
    currentCameraLookAt: new THREE.Vector3(),
  };

  getInput(player);

  await addModel(scene, Remy, player);

  player.movementAttrs = movementAttrs(player);

  return player;
};

export default addPlayer;
