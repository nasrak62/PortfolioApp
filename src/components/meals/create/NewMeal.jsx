import React, { useEffect, useMemo, useState } from 'react';
import FoodsTable from 'components/utils/Table/Table';
import Input from 'components/utils/Input';
import { useCallback } from 'react';
import ShowWhen from 'components/utils/ShowWhen';
import { isEmpty } from 'utils/lodash';
import Overview from '../Overview';
import {
  handleSearchChange,
  initialState,
  propertiesFromFood,
  removeFoodFromSearch,
} from './utils';
import { create } from 'utils/crud';
import { handleEditLink } from '../utils';
import { handleFoodRowChange } from 'components/foods/utils';

import { StyledNewMeal, classes } from './NewMeal.style';

const attrs = ['name', 'amount', 'proteins', 'carbs', 'fats'];

const NewMeal = () => {
  const [foodSearch, setFoodSearch] = useState('');
  const [foodsFromSearch, setFoodsFromSearch] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);

  const properties = useMemo(() => {
    return propertiesFromFood(selectedFoods);
  }, [selectedFoods]);

  const [meal, setMeal] = useState(initialState(properties));

  const [error, setError] = useState('');

  const addSelectedFood = useCallback(
    (food) => {
      !selectedFoods.includes(food) &&
        setSelectedFoods([...selectedFoods, food]);
    },
    [selectedFoods],
  );

  const handleChange = useCallback(
    async (e) => {
      return await handleSearchChange(
        e,
        foodSearch,
        setFoodsFromSearch,
        foodsFromSearch,
        setError,
        setFoodSearch,
      );
    },
    [foodSearch, foodsFromSearch],
  );

  const handleClick = useCallback(async () => {
    const body = meal;
    console.log(meal);
    const result = await create(body, '/meals', 'meal');

    console.log(result);
  }, [meal]);

  const removeFromSearch = useCallback((item, setData) => {
    removeFoodFromSearch(item, setSelectedFoods);
  }, []);

  useEffect(() => {
    setMeal((prev) => initialState(properties, prev.name));
  }, [selectedFoods, properties]);

  return (
    <StyledNewMeal className={classes.container}>
      <div>
        <h1 className={classes.title}>New Meal</h1>
      </div>

      <div className={classes.nameContainer}>
        <div className={classes.nameLabel}>Meal's Name: </div>
        <Input
          classes={classes.nameInput}
          attr="text"
          pattern={null}
          type="text"
          value={meal?.name}
          onChange={(e) => setMeal({ ...meal, name: e?.target?.value })}
          keyProp={`meal-name-input`}
        />
      </div>

      <div className={classes.searchContainer}>
        <div className={classes.nameLabel}>Search Food: </div>
        <Input
          classes={classes.nameInput}
          attr="text"
          pattern={null}
          type="text"
          value={foodSearch}
          onChange={handleChange}
          keyProp={`foodSearch-input`}
        />
      </div>

      <div>
        <ShowWhen condition={!isEmpty(foodsFromSearch)}></ShowWhen>
        <p>Found:</p>
        {foodsFromSearch?.map((food) => {
          return (
            <div key={`${food._id}${food?.name}`}>
              <p>{food?.name}</p>
              <button onClick={() => addSelectedFood(food)}>Add</button>
            </div>
          );
        })}
      </div>

      <div className={classes.tableContainer}>
        <FoodsTable
          data={selectedFoods}
          setData={setSelectedFoods}
          inputs={{ amount: true }}
          attrs={attrs}
          showDelete={true}
          showUpdate={false}
          onDelete={removeFromSearch}
          onChange={handleFoodRowChange}
          editLink={handleEditLink}
        />
      </div>

      <Overview meal={meal} classes={classes} />

      <div className={classes.buttonContainer}>
        <button onClick={handleClick} className={classes.button}>
          Create New Meal
        </button>
      </div>

      <ShowWhen condition={error}>
        <p>{error}</p>
      </ShowWhen>
    </StyledNewMeal>
  );
};

export default NewMeal;
