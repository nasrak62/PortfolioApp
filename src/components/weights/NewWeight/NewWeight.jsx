import React, { useState } from 'react';

import ChangeWeight from '../ChangeWeight/ChangeWeight';
import { createNewWeight } from './utils/create';
import { formatDate } from 'utils/date';

const NewWeight = () => {
  const [weight, setWeight] = useState({
    date: {
      value: formatDate(null),
      validation: 'date',
    },
    pounds: { value: 0, validation: 'numeric' },
  });

  return (
    <ChangeWeight
      weightChangeClick={createNewWeight}
      title="Create New Weight"
      buttonText="Create"
      weight={weight}
      setWeight={setWeight}
    />
  );
};

export default NewWeight;
