import React, { useState, useCallback } from 'react';

import ChangeWeight from '../ChangeWeight/ChangeWeight';
import { formatDate } from 'utils/date';
import { update } from './utils/update';
import { getWeight } from './utils/get';
import { isEmpty } from 'utils/lodash';

const EditWeight = () => {
  const [weight, setWeight] = useState({
    date: {
      value: formatDate(null),
      validation: 'date',
    },
    pounds: { value: 0, validation: 'numeric' },
  });

  const updateWeight = useCallback(async (weight) => {
    const result = await getWeight(weight.date.value);

    if (isEmpty(result?.created)) {
      result.errors = "This date doesn't have weight, please create it first";

      return result;
    }

    const dbWeight = result?.created?.[0];

    return await update(weight, dbWeight?._id);
  }, []);

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
