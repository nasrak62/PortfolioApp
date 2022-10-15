const handleMouseMove = (e, world) => {
  world.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  world.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
};

export const handleEvents = (world) => {
  addEventListener('mousemove', (e) => handleMouseMove(e, world));
};
