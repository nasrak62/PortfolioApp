import ShowWhen from 'components/utils/ShowWhen';
import useFetchData from 'hooks/fetchData';
import React from 'react';
import { StyledMeal, classes } from './Meals.style';
import Options from './Options';
import Table from './Table';

const Meals = () => {
  const [meals, setMeals, error] = useFetchData('/meals', 'meals');

  return (
    <StyledMeal className={classes.container}>
      <div>
        <h1 className={classes.title}>Meals</h1>
      </div>

      <Options classes={classes} />
      <Table data={meals} setData={setMeals} classes={classes} />

      <ShowWhen condition={Boolean(error)}>
        <div>
          <p>{error}</p>
        </div>
      </ShowWhen>
    </StyledMeal>
  );
};

export default Meals;
