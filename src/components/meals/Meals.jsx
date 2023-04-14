import ShowWhen from 'components/utils/ShowWhen';
import useFetchData from 'hooks/fetchData';
import { isEmpty } from 'utils/lodash';
import React from 'react';
import { StyledMeal, classes } from './Meals.style';
import Options from './Options';
import Table from './Table';

const Meals = () => {
  const [meals, setMeals, error] = useFetchData('/meals', 'meals');
  console.log(meals);

  const hasError = Boolean(error) && !isEmpty(error);

  if (isEmpty(meals)) {
    return <h1>No Data!</h1>;
  }

  return (
    <StyledMeal className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Meals</h1>
      </div>

      <Options classes={classes} />
      <Table data={meals} setData={setMeals} classes={classes} />

      <ShowWhen condition={Boolean(hasError)}>
        <div>
          <p>{error}</p>
        </div>
      </ShowWhen>
    </StyledMeal>
  );
};

export default Meals;
