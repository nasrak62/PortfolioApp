import useFetchData from 'hooks/fetchData';
import React from 'react';
import { StyledMeal, classes } from './Meals.style';
import Options from './Options';
import Table from './Table';

const Meals = () => {
  const [meals, setMeals, error, setError] = useFetchData('/meals', 'meals');

  return (
    <StyledMeal className={classes.container}>
      <div>
        <h1 className={classes.title}>Meals</h1>
      </div>

      <Options classes={classes} />
      <Table data={meals} setData={setMeals} classes={classes} />
    </StyledMeal>
  );
};

export default Meals;
