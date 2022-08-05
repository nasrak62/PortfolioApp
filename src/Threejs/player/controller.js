import THREE from 'Threejs/three';

const mapKeysToMovement = (
  acceleration,
  delta,
  keys,
  stateMachine,
  velocity,
  controlObject,
) => {
  const acc = acceleration.clone();
  const _Q = new THREE.Quaternion();
  const _A = new THREE.Vector3();
  const _R = controlObject.quaternion.clone();

  if (keys.shift) {
    acc.multiplyScalar(2.0);
  }

  console.log({ stateMachine: stateMachine });
  console.log(stateMachine.currentState);

  if (stateMachine?.currentState?.name == 'dance') {
    acc.multiplyScalar(0.0);
  }

  if (keys.forward) {
    velocity.z += acc.z * delta;
  }
  if (keys.backward) {
    velocity.z -= acc.z * delta;
  }
  if (keys.left) {
    _A.set(0, 1, 0);
    _Q.setFromAxisAngle(_A, 4.0 * Math.PI * delta * acceleration.y);
    _R.multiply(_Q);
  }
  if (keys.right) {
    _A.set(0, 1, 0);
    _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * delta * acceleration.y);
    _R.multiply(_Q);
  }

  return _R;
};

const handleMovement = (
  delta,
  velocity,
  deceleration,
  model,
  acceleration,
  stateMachine,
  keys,
) => {
  const frameDeceleration = new THREE.Vector3(
    velocity.x * deceleration.x,
    velocity.y * deceleration.y,
    velocity.z * deceleration.z,
  );

  frameDeceleration.multiplyScalar(delta);
  frameDeceleration.z =
    Math.sign(frameDeceleration.z) *
    Math.min(Math.abs(frameDeceleration.z), Math.abs(velocity.z));

  velocity.add(frameDeceleration);

  const controlObject = model;

  const _R = mapKeysToMovement(
    acceleration,
    delta,
    keys,
    stateMachine,
    velocity,
    controlObject,
  );

  controlObject.quaternion.copy(_R);

  const oldPosition = new THREE.Vector3();
  oldPosition.copy(controlObject.position);

  const forward = new THREE.Vector3(0, 0, 1);
  forward.applyQuaternion(controlObject.quaternion);
  forward.normalize();

  const sideways = new THREE.Vector3(1, 0, 0);
  sideways.applyQuaternion(controlObject.quaternion);
  sideways.normalize();

  sideways.multiplyScalar(velocity.x * delta);
  forward.multiplyScalar(velocity.z * delta);

  controlObject.position.add(forward);
  controlObject.position.add(sideways);

  oldPosition.copy(controlObject.position);
};

class Controller {
  constructor() {
    this.deceleration = new THREE.Vector3(-0.0005, -0.0001, -5.0);
    this.acceleration = new THREE.Vector3(1, 0.25, 50.0);
    this.velocity = new THREE.Vector3(0, 0, 0);
  }

  Update(delta, stateMachine, keys, animations, model, mixer) {
    if (!model && !stateMachine.currentState) {
      return;
    }

    stateMachine.updateState(delta, keys, stateMachine, animations);

    handleMovement(
      delta,
      this.velocity,
      this.deceleration,
      model,
      this.acceleration,
      stateMachine,
      keys,
    );

    if (mixer) {
      mixer.update(delta);
    }
  }
}

export default Controller;
