import { FBXLoader } from './three';

const addModel = (scene, model) => {
  const fbxLoader = new FBXLoader();

  return new Promise((resolve) => {
    fbxLoader.load(
      model,
      (object) => {
        object.scale.setScalar(0.1);
        object.traverse((c) => {
          c.castShadow = true;
        });
        // object.scale.set(0.1, 0.1, 0.1);

        scene.add(object);
        resolve(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.log(error);
      },
    );
  });
};

export default addModel;
