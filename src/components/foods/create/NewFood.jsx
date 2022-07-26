import ByCondition from 'components/utils/ByCondition';
import React, { useCallback, useState } from 'react';
import { create, read } from 'utils/crud';
import FoodInputs from '../inputs/FoodInputs';
import { initialFood } from '../utils';

const NewFood = () => {
  const [food, setFood] = useState(initialFood());
  const [scrapedFood, setScrapedFood] = useState(initialFood());
  const [isScraped, setIsScraped] = useState(false);
  const [created, setCreated] = useState(false);
  const [error, setError] = useState('');

  const createNewFood = useCallback(async () => {
    const name = 'food';
    const url = '/foods';
    let paramsObj = {};

    const foodToUse = isScraped ? scrapedFood : food;

    Object.keys(foodToUse).forEach((key) => {
      paramsObj[key] = foodToUse[key].value;
    });

    const { errors } = await create(paramsObj, url, name);

    if (errors) {
      return setError(errors?.fullMessages);
    }

    setCreated(true);
  }, [food, scrapedFood, isScraped]);

  const scrape = async () => {
    if (!food.name.value) {
      return setError('Please fill the food name');
    }

    const name = scrapedFood.name.value || food.name.value;

    const result = await read(`/foods?scrape=${name}`, 'food');

    if (result?.errors) {
      return setError(result?.errors);
    }

    const foodResult = result?.created;
    setScrapedFood(initialFood(foodResult));

    setIsScraped(true);
  };

  return (
    <>
      <button onClick={scrape}>scrape</button>
      <ByCondition
        condition={isScraped}
        ifTrue={
          <FoodInputs
            onClick={createNewFood}
            title="Create New Food"
            buttonText="Create"
            food={scrapedFood}
            setFood={setScrapedFood}
            error={error}
            created={created}
          />
        }
        ifFalse={
          <FoodInputs
            onClick={createNewFood}
            title="Create New Food"
            buttonText="Create"
            food={food}
            setFood={setFood}
            error={error}
            created={created}
          />
        }
      />
    </>
  );
};

export default NewFood;
