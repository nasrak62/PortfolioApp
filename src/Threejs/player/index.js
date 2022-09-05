import addModel from 'Threejs/add_model';
import THREE from 'Threejs/three';
import Remy from '../../assets/Man/Base3.glb';
import getInput, { handleMixer } from './event_handlers';
import { movementAttrs } from './states/movementAttrs';
import { playerStates } from './states/stateObject';
import { initialTimes, mapKeysToPlayer } from './utils';

const addPlayer = async (scene, mixers) => {
  const player = {};
  player.times = { ...initialTimes };

  player.keys = mapKeysToPlayer();
  player.states = { ...playerStates };
  player.animations = { idle: { action: null, clip: null } };
  player.mixers = mixers;
  player.mixer = null;

  player.cameraAttrs = {
    currentCameraPosition: new THREE.Vector3(),
    currentCameraLookAt: new THREE.Vector3(),
  };

  getInput(player);

  await addModel(scene, Remy, player);

  player.movementAttrs = movementAttrs(player);

  player.mixer.addEventListener('finished', (e) => handleMixer(e, player));

  return player;
};

export default addPlayer;
