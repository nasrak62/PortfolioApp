import { updateState } from 'Threejs/state';
import THREE from 'Threejs/three';

const handleMovement = (delta, player) => {
  const decceleration = new THREE.Vector3(-0.0005, -0.0001, -5.0);
  const acceleration = new THREE.Vector3(1, 0.25, 50.0);
  const velocity = new THREE.Vector3(0, 0, 0);

  const frameDecceleration = new THREE.Vector3(
    velocity.x * decceleration.x,
    velocity.y * decceleration.y,
    velocity.z * decceleration.z,
  );

  frameDecceleration.multiplyScalar(delta);
  frameDecceleration.z =
    Math.sign(frameDecceleration.z) *
    Math.min(Math.abs(frameDecceleration.z), Math.abs(velocity.z));

  velocity.add(frameDecceleration);

  const _Q = new THREE.Quaternion();
  const _A = new THREE.Vector3();
  const _R = player.model.quaternion.clone();

  const acc = acceleration.clone();

  if (player.keys.shift) {
    acc.multiplyScalar(20.0);
  }

  if (player.keys.forward) {
    velocity.z += acc.z * delta * 10;
  }

  if (player.keys.backward) {
    velocity.z -= acc.z * delta * 10;
  }

  if (player.keys.left) {
    _A.set(0, 1, 0);
    _Q.setFromAxisAngle(_A, 4.0 * Math.PI * delta * acceleration.y);
    _R.multiply(_Q);
  }

  if (player.keys.right) {
    _A.set(0, 1, 0);
    _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * delta * acceleration.y);
    _R.multiply(_Q);
  }

  player.model.quaternion.copy(_R);

  const forward = new THREE.Vector3(0, 0, 1);
  forward.applyQuaternion(player.model.quaternion);
  forward.normalize();

  const sideways = new THREE.Vector3(1, 0, 0);
  sideways.applyQuaternion(player.model.quaternion);
  sideways.normalize();

  sideways.multiplyScalar(velocity.x * delta);
  forward.multiplyScalar(velocity.z * delta);

  player.model.position.add(forward);
  player.model.position.add(sideways);
};

const calculateIdealOffset = (quaternion, position, initialVector) => {
  const idealOffset = initialVector;

  idealOffset.applyQuaternion(quaternion);
  idealOffset.add(position);

  return idealOffset;
};

const updateCamera = (delta, player, world) => {
  const initialOffset = new THREE.Vector3(-15, 20, -30);
  const initialLookAt = new THREE.Vector3(0, 10, 50);

  const quaternion = player?.model?.quaternion;
  const position = player.model.position;

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
  if (player.currentState.name === 'walk') {
    return player.mixer.update(delta * 1.2);
  }

  if (player.currentState.name === 'run') {
    return player.mixer.update(delta * 1.5);
  }

  player.mixer.update(delta);
};

export const updateControls = (delta, player, world) => {
  if (!player.model || !player.currentState || !player.mixer) {
    return;
  }

  updateState(delta, player);

  handleMovement(delta, player);

  updateCamera(delta, player, world);

  updateMixer(delta, player);
};
