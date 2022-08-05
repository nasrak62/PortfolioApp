import mean from 'lodash/mean';
import max from 'lodash/max';
import min from 'lodash/min';

export const parseWeights = (weights) => {
  const new_weights = weights.map((weight) => {
    return { name: weight?.date, value: weight?.pounds };
  });

  return new_weights.sort((a, b) => {
    return new Date(a.name).getTime() - new Date(b.name).getTime();
  });
};

export const getAverage = (weightsList) => {
  const weightsListValue = weightsList.map((weight) => weight?.value);

  return mean(weightsListValue);
};

export const getMaxWeight = (weightsList) => {
  const weightsListValue = weightsList.map((weight) => weight?.value);

  return max(weightsListValue);
};

export const getMinWeight = (weightsList) => {
  const weightsListValue = weightsList.map((weight) => weight?.value);

  return min(weightsListValue);
};
