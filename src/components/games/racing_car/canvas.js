import Car from './car';
import { NeuralNetwork } from './network';
import Road from './road';
import { Visualizer } from './visualizer';

const saveBrain = (world) => {
  const bestBrain = world.bestCar.brain;
  const bestBrainJson = JSON.stringify(bestBrain);

  localStorage.setItem('bestBrain', bestBrainJson);
};

// const deleteBrain = () => {
//   localStorage.removeItem('bestBrain', '');
// };

const loadBrain = () => {
  const bestBrainJson = localStorage.getItem('bestBrain');

  if (!bestBrainJson) {
    return null;
  }

  return JSON.parse(bestBrainJson) || null;
};
const saveBestCarResult = (world) => {
  const bestCarResult = world.bestCarResult;
  const bestCarResultJson = JSON.stringify(bestCarResult);

  localStorage.setItem('bestCarResult', bestCarResultJson);
};

// const deleteBestCarResult = () => {
//   localStorage.removeItem('bestCarResult', '');
// };

const loadBestCarResult = () => {
  const bestCarResultJson = localStorage.getItem('bestCarResult');

  if (!bestCarResultJson) {
    return null;
  }

  return JSON.parse(bestCarResultJson) || null;
};

const saveData = (world) => {
  saveBestCarResult(world);
  saveBrain(world);
};

const handleKeyboard = (event, car, value) => {
  switch (event.key) {
    case 'ArrowUp':
      car.controls.forward = value;
      break;
    case 'ArrowDown':
      car.controls.backward = value;
      break;
    case 'ArrowLeft':
      car.controls.left = value;
      break;
    case 'ArrowRight':
      car.controls.right = value;
      break;
  }
};

const addEventListeners = (world) => {
  document.onkeydown = (event) => handleKeyboard(event, world.car, true);
  document.onkeyup = (event) => handleKeyboard(event, world.car, false);
};

const generateCars = (numberOfCars, world, centerLaneCount) => {
  const cars = [];

  for (let i = 0; i < numberOfCars; i++) {
    const car = new Car(
      world.road.getLaneCenter(centerLaneCount),
      100,
      30,
      50,
      world.carCanvas,
      'AI',
    );

    cars.push(car);

    world.cars = cars;
    world.bestCar = cars[0];
  }
};

const updateBrains = (world) => {
  const bestBrain = loadBrain(world) || world.cars[0];

  const cars = world.cars.map((car, index) => {
    if (bestBrain) {
      return car;
    }

    car.brain = bestBrain;

    if (index === 0) {
      return car;
    }

    NeuralNetwork.mutate(car.brain, 0.1);

    return car;
  });

  world.cars = cars;
};

const drawElements = (world) => {
  const { carCtx, cars, bestCar, road, carCanvas, traffic } = world;

  carCtx.save();
  carCtx.translate(0, -bestCar.y + carCanvas.height * 0.7);

  road.draw(carCtx);
  traffic.forEach((trafficCar) => {
    trafficCar.draw(carCtx, 'red');
  });

  carCtx.globalAlpha = 0.2;
  cars.forEach((car) => car.draw(carCtx));
  carCtx.globalAlpha = 1;
  bestCar.draw(carCtx, 'blue', true);

  carCtx.restore();
};

const createNPCCar = (world) => {
  const { road, carCanvas, bestCar } = world;

  const carOffset = Math.random() * 200 + 100;
  const randomLane = Math.random() * (world.road.laneCount - 1);
  const x = road.getLaneCenter(randomLane);
  const y = bestCar.y - carOffset;

  return new Car(x, y, 30, 50, carCanvas, 'NPC', 0, 7);
};

const updateTrafficCar = (trafficCar, index, world) => {
  const { road, traffic, carCanvas, bestCar } = world;

  trafficCar.update(road.borders, traffic);

  if (
    Math.abs(trafficCar.y) + Math.abs(carCanvas.height) <
    Math.abs(bestCar.y)
  ) {
    const newCar = createNPCCar(world);

    traffic[index] = newCar;
  }
};

const updateElements = (world) => {
  const { road, traffic, cars } = world;

  // car.update(road.borders, traffic);

  cars.forEach((car) => {
    car.update(road.borders, traffic);
  });

  traffic.forEach((trafficCar, index) => {
    updateTrafficCar(trafficCar, index, world);
  });

  drawElements(world);
};

const animate = (world, settingsObject) => {
  const { carCtx, carCanvas, networkCtx, cars, bestCarResult } = world;

  carCtx.clearRect(0, 0, carCanvas.width, carCanvas.height);

  const bestCar = cars.find((car) => {
    const yValues = cars.map((car) => car.y);
    const minCar = Math.min(...yValues);
    return car.y === minCar;
  });

  world.bestCar = bestCar || cars[0];

  if (world.bestCar.y < bestCarResult) {
    world.bestCarResult = world.bestCar.y;
    world.bestBrain = world.bestCar.brain;

    saveData(world);
  }

  updateElements(world);
  Visualizer.drawNetwork(networkCtx, world.bestCar.brain);
  settingsObject.animationId = requestAnimationFrame(() =>
    animate(world, settingsObject),
  );
};

const createTraffic = (world) => {
  const traffic = [];

  for (let i = 0; i < world.numberOfTraffic; i++) {
    const car = createNPCCar(world);

    traffic.push(car);
  }

  world.traffic = traffic;
};

export const createCar = (world, centerLaneCount) => {
  const { road, carCanvas } = world;

  const x = road.getLaneCenter(centerLaneCount);

  world.car = new Car(x, 100, 30, 50, carCanvas, 'AI');
};

const addPlayers = (world) => {
  const centerLaneCount = (world.road.laneCount - 1) / 2;
  // createCar(world, centerLaneCount);
  generateCars(1000, world, centerLaneCount);
  updateBrains(world);
  createTraffic(world);
};

export const handleCanvas = (carCanvas, networkCanvas, settingsObject) => {
  const world = {};

  world.carCanvas = carCanvas;
  world.networkCanvas = networkCanvas;
  world.carCtx = carCanvas.getContext('2d');
  world.networkCtx = networkCanvas.getContext('2d');
  world.road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);
  world.bestCarResult = loadBestCarResult() || 1;
  world.numberOfTraffic = 5;

  addPlayers(world);
  addEventListeners(world);
  animate(world, settingsObject);
};
