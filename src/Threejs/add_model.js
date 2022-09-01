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

export default addModel;
