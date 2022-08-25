// import { FBXLoader } from './three';
import { addAnimation } from './add_animation';
import { GLTFLoader } from './three';

const addModel = async (scene, model, player) => {
  const glftLoader = new GLTFLoader();

  player.objectModel = await glftLoader.loadAsync(model);
  player.model = player.objectModel.scene;

  player.model.traverse((c) => {
    c.castShadow = true;

    if (c.isMesh) {
      c.material.depthWrite = true;
    }
  });

  scene.add(player.objectModel.scene);

  player.model.scale.set(5, 5, 5);

  addAnimation(player);
};

// const addModel = (scene, model) => {
//   const fbxLoader = new GLTFLoader();

//   return new Promise((resolve) => {
//     fbxLoader.load(
//       model,
//       (object) => {
//         // object.scale.setScalar(0.1);
//         object.traverse((c) => {
//           c.castShadow = true;
//         });
//         // object.scale.set(0.1, 0.1, 0.1);

//         scene.add(object);
//         resolve(object);
//       },
//       (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//       },
//       (error) => {
//         console.log(error);
//       },
//     );
//   });
// };

export default addModel;
