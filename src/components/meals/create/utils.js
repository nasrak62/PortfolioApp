import isEmpty from "lodash/isEmpty";
import { destroyAndGetUpdatedData, read } from "utils/crud";

export const propertiesFromFood = (selectedFoods) => {
  let obj = { calories: 0, proteins: 0, carbs: 0, fats: 0, foods: [] };

  selectedFoods.forEach((food) => {
    obj.calories += food.calories;
    obj.proteins += food.proteins;
    obj.carbs += food.carbs;
    obj.fats += food.fats;
    obj.foods = [...obj.foods, { foodId: food._id, amount: food.amount }];
  });

  return obj;
};

export const handleSearchChange = async (
  e,
  foodSearch,
  setFoodsFromSearch,
  foodsFromSearch,
  setError,
  setFoodSearch
) => {
  setFoodSearch(e?.target?.value);

  if (foodSearch?.length < 2) {
    !isEmpty(foodsFromSearch) && setFoodsFromSearch([]);
    return;
  }

  const url = Boolean(foodSearch) ? `/foods?by_name=${foodSearch}` : `/foods`;

  const result = await read(url, "foods");

  if (result?.errors) {
    return setError(result?.errors);
  }

  return setFoodsFromSearch(result?.created);
};

export const initialState = (properties, name = null) => ({
  name: name || "",
  calories: properties.calories,
  proteins: properties.proteins,
  carbs: properties.carbs,
  fats: properties.fats,
  foods: properties.foods,
});

export const removeFoodMeal = (item, setData) => {
  destroyAndGetUpdatedData(
    `/mealfoods/${item?._id}`,
    "mealFood",
    "/meals",
    "meals",
    setData
  );
};

export const removeFoodFromSearch = (item, setData) => {
  setData((prev) => {
    return prev?.filter((element) => element._id !== item._id);
  });
};
