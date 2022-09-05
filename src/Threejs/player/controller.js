import { updateState } from 'Threejs/state';
import THREE from 'Threejs/three';
import { handleFly } from './controller_handlers/fly';
import { handleFlyMove } from './controller_handlers/fly_move';
import { handleJumpAir } from './controller_handlers/jump_air';
import { handleWalk } from './controller_handlers/walk';

const splitActions = (delta, player, controllerAttrs) => {
  const currentState = player.currentState?.name;

  switch (currentState) {
    case 'fly':
      return handleFly(delta, player, controllerAttrs);
    case 'flyMove':
      return handleFlyMove(delta, player, controllerAttrs);
    case 'jumpAir':
      return handleJumpAir(delta, player, controllerAttrs);

    default:
      return handleWalk(delta, player, controllerAttrs);
  }
};

const handleMovement = (delta, player) => {
  const controllerAttrs = {
    deceleration: new THREE.Vector3(-0.0005, -0.0001, -5.0),
    acceleration: new THREE.Vector3(1, 0.25, 50.0),
    velocity: new THREE.Vector3(0, 0, 0),
  };

  const frameDeceleration = new THREE.Vector3(
    controllerAttrs.velocity.x,
    controllerAttrs.velocity.y,
    controllerAttrs.velocity.z,
  );

  frameDeceleration.multiplyScalar(delta);
  frameDeceleration.z =
    Math.sign(frameDeceleration.z) *
    Math.min(
      Math.abs(frameDeceleration.z),
      Math.abs(controllerAttrs.velocity.z),
    );

  controllerAttrs.velocity.add(frameDeceleration);

  controllerAttrs._Q = new THREE.Quaternion();
  controllerAttrs._A = new THREE.Vector3();
  controllerAttrs._R = player.model.quaternion.clone();

  controllerAttrs.acc = controllerAttrs.acceleration.clone();

  if (player.keys.shift) {
    controllerAttrs.acc.multiplyScalar(20.0);
  }

  splitActions(delta, player, controllerAttrs);

  player.model.quaternion.copy(controllerAttrs._R);

  const forward = new THREE.Vector3(0, 0, 1);
  forward.applyQuaternion(player.model.quaternion);
  forward.normalize();

  const up = new THREE.Vector3(0, 1, 0);
  up.applyQuaternion(player.model.quaternion);
  up.normalize();

  const sideways = new THREE.Vector3(1, 0, 0);
  sideways.applyQuaternion(player.model.quaternion);
  sideways.normalize();

  sideways.multiplyScalar(controllerAttrs.velocity.x * delta);
  forward.multiplyScalar(controllerAttrs.velocity.z * delta);
  up.multiplyScalar(controllerAttrs.velocity.y * delta);

  player.model.position.add(forward);
  player.model.position.add(sideways);
  player.model.position.add(up);
};

const calculateIdealOffset = (quaternion, position, initialVector) => {
  const idealOffset = initialVector;

  idealOffset.applyQuaternion(quaternion);
  idealOffset.add(position);

  return idealOffset;
};

const updateCamera = (delta, player, world) => {
  let initialOffset = new THREE.Vector3(-0, 40, -50);
  const initialLookAt = new THREE.Vector3(0, 10, 50);

  const quaternion = player?.model?.quaternion;
  const position = player.model.position;

  if (player?.currentState?.name === 'fly') {
    initialOffset.add(new THREE.Vector3(0, 20, 0));
  }

  const idealOffset = calculateIdealOffset(quaternion, position, initialOffset);
  const idealLookAt = calculateIdealOffset(quaternion, position, initialLookAt);

  const t = 1.0 - Math.pow(0.001, delta);

  player.cameraAttrs.currentCameraPosition.lerp(idealOffset, t);
  player.cameraAttrs.currentCameraLookAt.lerp(idealLookAt, t);

  const newCameraPosition = player.cameraAttrs.currentCameraPosition;

  world.camera.position.copy(newCameraPosition);
  world.camera.lookAt(player.cameraAttrs.currentCameraLookAt);
};

const updateMixer = (delta, player) => {
  const animationName = player?.currentState?.name;
  const animationTime = delta * player?.times?.animationsTime?.[animationName];

  if (!animationTime) {
    return player.mixer.update(delta);
  }

  if (
    player.keys.shift &&
    (animationName === 'punchMidR' || animationName === 'punchMidL')
  ) {
    return player.mixer.update(animationTime * 5);
  }

  return player.mixer.update(animationTime);
};

export const updateControls = (delta, player, world) => {
  const ready =
    player.model && player.currentState && player.mixer && player.movementAttrs;

  if (!ready) {
    return;
  }

  updateState(delta, player);

  handleMovement(delta, player);

  updateCamera(delta, player, world);

  updateMixer(delta, player);
};
