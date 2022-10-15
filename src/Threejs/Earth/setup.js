import THREE from 'Threejs/three';
import gsap from 'gsap';
import earthImage from './image/earth.jpg';
import moonImage from './image/moon.jpg';
import sunImage from './image/sun.jpg';
import sphereVertexShader from './shader/sphere/vertex_shader';
import sphereFragmentShader from './shader/sphere/fragment_shader';
import atmosphereVertexShader from './shader/atmosphere/vertex_shader';
import atmosphereFragmentShader from './shader/atmosphere/fragment_shader';
import { handleEvents } from './events';

const initScene = (world) => {
  world.scene = new THREE.Scene();
};

const initCamera = (world) => {
  world.camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  world.camera.position.z = 15;
};

const initRenderer = (world) => {
  world.renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: world.canvas,
  });
  world.renderer.setPixelRatio(window.devicePixelRatio);

  world.renderer.setSize(window.innerWidth, window.innerHeight);
};

const imageShaderFromPlanet = (world) => {
  const { planet } = world;

  if (planet === 'earth') {
    world.currentImage = earthImage;
    world.atmosphereColor = new THREE.Vector3(0.3, 0.6, 1.0);
    world.atmosphereIntensity = new THREE.Vector3(0.0, 0.0, 1.0);

    return;
  }

  if (planet === 'moon') {
    world.currentImage = moonImage;
    world.atmosphereColor = new THREE.Vector3(1, 1, 1);
    world.atmosphereIntensity = new THREE.Vector3(0.0, 0.0, 1.0);

    return;
  }

  world.currentImage = sunImage;
  world.atmosphereColor = new THREE.Vector3(1.0, 0.4, 0.4);
  world.atmosphereIntensity = new THREE.Vector3(0.0, 0.0, 1.0);
};

const getTexture = async (world) => {
  const textureLoader = new THREE.TextureLoader();

  const texture = await new Promise((resolve) => {
    textureLoader.load(world.currentImage, (texture) => {
      resolve(texture);
    });
  });

  return texture;
};

const initSphere = async (world) => {
  const sphereGeometry = new THREE.SphereGeometry(5, 50, 50);
  const globeTexture = await getTexture(world);

  const sphereMaterial = new THREE.ShaderMaterial({
    vertexShader: sphereVertexShader,
    fragmentShader: sphereFragmentShader,
    uniforms: {
      globeTexture: { value: globeTexture },
      atmosphereColor: { value: world.atmosphereColor },
      atmosphereIntensity: { value: world.atmosphereIntensity },
    },
  });

  world.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
};

const initAtmosphere = (world) => {
  const sphereGeometry = new THREE.SphereGeometry(5, 50, 50);

  const sphereMaterial = new THREE.ShaderMaterial({
    vertexShader: atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    uniforms: {
      atmosphereColor: { value: world.atmosphereColor },
      atmosphereIntensity: { value: world.atmosphereIntensity },
    },
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
  });

  world.atmosphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  world.atmosphere.scale.set(1.1, 1.1, 1.1);
  world.scene.add(world.atmosphere);
};

const addGroup = (world) => {
  world.group = new THREE.Group();
  world.group.add(world.sphere);
  world.scene.add(world.group);
};

const addStars = (world) => {
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
  });

  const starVertices = [];

  for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = -Math.random() * 2000;

    starVertices.push(x, y, z);
  }

  starGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(starVertices, 3),
  );

  world.stars = new THREE.Points(starGeometry, starMaterial);

  world.scene.add(world.stars);
};

const init = async (canvas, settingsObject, planet) => {
  const world = {};
  world.mouse = {
    x: undefined,
    y: undefined,
  };

  world.canvas = canvas;
  world.planet = planet;

  initScene(world);
  initCamera(world);
  initRenderer(world);
  imageShaderFromPlanet(world);
  await initSphere(world);
  initAtmosphere(world);
  handleEvents(world);
  addGroup(world);
  addStars(world);

  animate(world, settingsObject);
};

const rotateSphere = (world) => {
  world.sphere.rotation.y += 0.002;
};

const rotateGroup = (world) => {
  const { mouse } = world;

  if (mouse.x === undefined || mouse.x === null) {
    return;
  }

  gsap.to(world.group.rotation, {
    x: -mouse.y * 0.3,
    y: mouse.x * 0.5,
    duration: 2,
  });
};

const animate = (world, settingsObject) => {
  const { renderer, scene, camera } = world;

  renderer.render(scene, camera);

  rotateSphere(world);
  rotateGroup(world);

  settingsObject.animationId = requestAnimationFrame(() =>
    animate(world, settingsObject),
  );
};

export default init;
