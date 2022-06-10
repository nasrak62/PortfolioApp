export const BREAK_POINTS = {
  XS: "0px",
  SM: "600px",
  MD: "900px",
  LG: "1200px",
  XL: " 1536px",
};

export const classObj = (prefix, ...args) => {
  let classes = {};

  args.forEach((name) => {
    return (classes[name] = `${prefix}-${name}`);
  });

  return classes;
};
