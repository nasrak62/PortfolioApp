export const randomFromArray = (array) => {
  const size = array.length;

  return Math.floor(Math.random() * size);
};

export const randomRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
