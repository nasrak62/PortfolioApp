export const capitalize = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

export const addNames = (...names) => {
  let className = "";

  names.forEach((name) => {
    className = `${className} ${name}`;
  });

  return className;
};
