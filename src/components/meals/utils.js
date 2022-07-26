import { destroyAndGetUpdatedData } from 'utils/crud';

export const foodsFromMeal = (meal) => {
  let foods = [];

  meal.MealFood?.forEach((mealFood) => {
    foods.push(mealFood.food);
  });

  return foods;
};

export const onDeleteMeal = (item, setData) => {
  destroyAndGetUpdatedData(
    `/meals/${item?._id}`,
    'meal',
    '/meals',
    'meals',
    setData,
  );
};

export const handleEditLink = (id) => {
  return `/meals/edit/${id}`;
};
