// import THREE, { FBXLoader } from './three';
import THREE from './three';
import { switchState } from 'Threejs/state';

export const addAnimation = async (player) => {
  player.mixer = new THREE.AnimationMixer(player.model);
  console.log(player.objectModel);
  const clip = player.objectModel.animations[1];
  const action = player.mixer.clipAction(clip);

  player.animations['idle'] = {
    clip: clip,
    action: action,
  };

  const clip2 = player.objectModel.animations[0];
  const action2 = player.mixer.clipAction(clip2);

  player.animations['walk'] = {
    clip: clip2,
    action: action2,
  };

  switchState('idle', player);

  // const keys = Object.keys(player.animationObject);
  // const promises = [];

  // keys.forEach((key) => {
  //   promises.push(loader.loadAsync(player.animationObject[key]));
  // });

  // const animationList = await Promise.all(promises);

  // keys.forEach((key, index) => {
  //   loadAnimation(player, key, animationList[index]);
  // });
};

// const loadAnimation = (player, name, animation) => {
//   const clip = animation.animations[0];
//   const action = player.mixer.clipAction(clip);

//   player.animations[name] = {
//     clip: clip,
//     action: action,
//   };

//   if (name === 'idle') {
//     switchState('idle', player);
//   }
// };

// export const addAnimationWithManager = (player) => {
//   Object.keys(player.animationObject).forEach((key) => {
//     loader.load(player.animationObject[key], (animation) => {
//       loadAnimation(player, key, animation);
//     });
//   });
// };
