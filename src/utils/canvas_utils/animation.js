export const clearAnimation = (id) => {
  id && cancelAnimationFrame(id);
};
