import React from 'react';

import useFetchData from 'hooks/fetchData';

import Table from 'components/utils/Table/Table';
import Options from './Options';
import { handleEditLink, handleFoodRowChange, onDeleteFood } from './utils';
import ShowWhen from 'components/utils/ShowWhen';
import { isEmpty } from 'utils/lodash';
import { StyledFoods, classes } from './Foods.style';

const attrs = ['name', 'amount', 'proteins', 'carbs', 'fats'];

const Foods = () => {
  const [foods, setFoods, error] = useFetchData('/foods', 'foods');

  const hasError = Boolean(error) && !isEmpty(error);

  if (isEmpty(foods)) {
    return (
      <StyledFoods className={classes.container}>
        <div className={classes.titleContainer}>
          <h1>No Foods Data</h1>
        </div>
      </StyledFoods>
    );
  }

  return (
    <StyledFoods className={classes.container}>
      <div className={classes.titleContainer}>
        <h1>Foods</h1>
      </div>

      <Options classes={classes} />
      <Table
        data={foods}
        setData={setFoods}
        attrs={attrs}
        onDelete={onDeleteFood}
        onChange={handleFoodRowChange}
        editLink={handleEditLink}
      />

      <ShowWhen condition={hasError}>
        <div>
          <p>{error}</p>
        </div>
      </ShowWhen>
    </StyledFoods>
  );
};

export default Foods;
