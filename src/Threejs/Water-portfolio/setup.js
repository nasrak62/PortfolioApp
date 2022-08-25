import THREE from 'Threejs/three';

const init = (elem) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  elem.appendChild(renderer.domElement);

  animate(renderer, scene, camera);
};

const animate = (renderer, scene, camera) => {
  requestAnimationFrame(() => animate(renderer, scene, camera));
  renderer.render(scene, camera);
};

export default init;
