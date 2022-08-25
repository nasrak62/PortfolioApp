import THREE, { OrbitControls } from './three';
import addPlayer from './player';
import { updateControls } from './player/controller';

const onResize = (camera, renderer) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const addCube = (scene) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  return cube;
};

const animate = (world, player, runId) => {
  const frameId = requestAnimationFrame(() => animate(world, player, runId));

  const { cube, renderer, scene, camera, mixers, controls, clock } = world;

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // const delta = (time - world.time) * 0.001;
  const delta = clock.getDelta();

  if (mixers) {
    Object.keys(mixers).forEach((key) => {
      mixers[key].update(delta * 5);
    });
  }

  updateControls(delta, player, world);

  renderer.render(scene, camera);

  controls.update();
  runId.value = frameId;
};

const initRenderer = (ref) => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  ref.appendChild(renderer.domElement);

  return renderer;
};

const initCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.set(0, 50, 50);

  return camera;
};

const initScene = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xcccccc);
  scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

  return scene;
};

const addLight = (scene) => {
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemiLight.position.set(0, 200, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(0, 200, 100);
  dirLight.castShadow = true;
  dirLight.shadow.camera.top = 180;
  dirLight.shadow.camera.bottom = -100;
  dirLight.shadow.camera.left = -120;
  dirLight.shadow.camera.right = 120;
  scene.add(dirLight);
};

const addGround = (scene) => {
  const geometry = new THREE.PlaneGeometry(2000, 2000);
  const material = new THREE.MeshPhongMaterial({
    color: 0x999999,
    depthWrite: false,
  });

  const mesh = new THREE.Mesh(geometry, material);

  mesh.rotation.x = -Math.PI / 2;
  mesh.receiveShadow = true;

  scene.add(mesh);
};

const addGrid = (scene) => {
  const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  scene.add(grid);
};

// const addGui = (camera) => {
//   const gui = new GUI();
//   const cameraFolder = gui.addFolder('Camera');
//   cameraFolder.add(camera.position, 'z', 0, 100);
//   cameraFolder.add(camera.position, 'y', 0, 100);
//   cameraFolder.add(camera.position, 'x', 0, 100);
//   cameraFolder.open();
// };

const addEnvironmentStuff = (scene, camera, renderer) => {
  addGround(scene);
  addLight(scene);
  addGrid(scene);
  // addGui(camera);
  const controls = new OrbitControls(camera, renderer.domElement);
  window.addEventListener('resize', () => onResize(camera, renderer));

  return controls;
};

export const init = async (ref, runId) => {
  const world = {};
  world.scene = initScene();
  world.camera = initCamera();
  world.renderer = initRenderer(ref);
  world.cube = addCube(world.scene);
  world.mixers = {};
  world.clock = new THREE.Clock();

  world.controls = addEnvironmentStuff(
    world.scene,
    world.camera,
    world.renderer,
  );

  world.time = null;

  const player = await addPlayer(world.scene, world.mixers);

  animate(world, player, runId);
};
