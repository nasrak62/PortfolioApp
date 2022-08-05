import THREE, { FBXLoader } from './three';

export const addAnimation = (player, mixers, animation) => {
  const anim = new FBXLoader();

  return new Promise((resolve) => {
    anim.load(animation, (anim) => {
      let m = new THREE.AnimationMixer(player);
      mixers[`${animation}`] = m;
      let action = m.clipAction(anim.animations[0]);
      action.clampWhenFinished = true;
      action.loop = THREE.LoopOnce;

      resolve(action);
    });
  });
};

const loadAnimation = (mixer, animations, name, animation) => {
  const clip = animation.animations[0];
  const action = mixer.clipAction(clip);

  animations[name] = {
    clip: clip,
    action: action,
  };
};

export const addAnimationWithManager = (
  mixer,
  animations,
  manager,
  animationObject,
) => {
  const loader = new FBXLoader(manager);

  return new Promise((resolve) => {
    Object.keys(animationObject).forEach((key) => {
      loader.load(animationObject[key], (animation) => {
        loadAnimation(mixer, animations, key, animation);
      });
    });

    resolve(true);
  });
};
