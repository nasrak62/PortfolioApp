import React from 'react';

import useFetchData from 'hooks/fetchData';

import Table from 'components/utils/Table/Table';
import Options from './Options';
import { handleEditLink, handleFoodRowChange, onDeleteFood } from './utils';
import ShowWhen from 'components/utils/ShowWhen';

const attrs = ['name', 'amount', 'proteins', 'carbs', 'fats'];

const Foods = () => {
  const [foods, setFoods, error] = useFetchData('/foods', 'foods');
  console.log({})
  return (
    <div>
      <div>
        <h1>Foods</h1>
      </div>

      <Options />
      <Table
        data={foods}
        setData={setFoods}
        attrs={attrs}
        onDelete={onDeleteFood}
        onChange={handleFoodRowChange}
        editLink={handleEditLink}
      />

      <ShowWhen condition={Boolean(error)}>
        <div>
          <p>{error}</p>
        </div>
      </ShowWhen>
    </div>
  );
};

export default Foods;
