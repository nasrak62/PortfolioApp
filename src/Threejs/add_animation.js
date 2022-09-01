// import THREE, { FBXLoader } from './three';
import THREE from './three';
import { switchState } from 'Threejs/state';

export const addAnimation = async (player) => {
  player.mixer = new THREE.AnimationMixer(player.model);
  console.log(player.objectModel.animations);
  player.objectModel.animations.forEach((animation) => {
    if (animation.name.includes('-')) {
      const type = animation.name.split('-')[1];
      const clip = animation;
      const action = player.mixer.clipAction(clip);

      player.animations[type] = {
        clip: clip,
        action: action,
      };
    }
  });

  switchState('idle', player);

  return;

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
