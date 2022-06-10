export const parseWeights = (weights) => {
  const new_weights = weights.map((weight) => {
    return { name: weight?.date, value: weight?.pounds };
  });

  return new_weights.sort((a, b) => {
    return new Date(a.name).getTime() - new Date(b.name).getTime();
  });
};
