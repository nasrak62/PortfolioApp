import mean from 'lodash/mean';
import max from 'lodash/max';
import min from 'lodash/min';
import { displayILDate } from 'utils/date';

export const parseWeights = (weights) => {
  let new_weights = [...weights];

  new_weights.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  new_weights = new_weights.map((weight) => {
    const displayDate = displayILDate(weight?.date);

    return { name: displayDate, value: weight?.pounds };
  });

  return new_weights;
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
