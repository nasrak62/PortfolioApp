import THREE from 'Threejs/three';

const init = (elem) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  elem.appendChild(renderer.domElement);
  const sphereGeometry = new THREE.SphereGeometry(5, 50, 50);
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);

  animate(renderer, scene, camera);
};

const animate = (renderer, scene, camera) => {
  requestAnimationFrame(() => animate(renderer, scene, camera));
  renderer.render(scene, camera);
};

export default init;
