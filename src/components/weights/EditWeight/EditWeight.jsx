import ShowWhen from 'components/utils/ShowWhen';
import React, { useEffect, useState, useCallback } from 'react';

import ChangeWeight from '../ChangeWeight/ChangeWeight';
import { formatDate } from 'utils/date';
import { update } from './utils/update';
import { getWeight } from './utils/get';

const EditWeight = () => {
  const [error, setError] = useState(false);
  const [weight, setWeight] = useState({
    date: {
      value: formatDate(null),
      validation: 'date',
    },
    pounds: { value: 0, validation: 'numeric' },
  });

  const [DBWeight, setDBWeight] = useState(null);

  const updateWeight = useCallback(
    async (weight) => {
      return await update(weight, DBWeight?._id);
    },
    [DBWeight],
  );

  const weightInfo = useCallback(async () => {
    setDBWeight(null);
    const result = await getWeight(weight?.date?.value);

    if (result?.errors) {
      return setError(result?.errors);
    }

    const current_weight = result?.created[0];

    if (!current_weight?._id) {
      return;
    }

    setDBWeight(current_weight);

    return setWeight({
      date: {
        value: current_weight?.date,
        validation: 'date',
      },
      pounds: { value: current_weight?.pounds, validation: 'numeric' },
    });
  }, [weight.date.value]);

  useEffect(() => {
    weightInfo();
  }, [weight.date.value, weightInfo]);

  if (!DBWeight) {
    return (
      <div>
        <h1>please wait...</h1>
        <ShowWhen condition={error}>{error}</ShowWhen>
      </div>
    );
  }

  return (
    <ChangeWeight
      weightChangeClick={updateWeight}
      title="Update Weight"
      buttonText="Update"
      weight={weight}
      setWeight={setWeight}
    />
  );
};

export default EditWeight;
