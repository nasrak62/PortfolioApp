import React, { useCallback, useState } from "react";
import { create } from "utils/crud";
import FoodInputs from "../inputs/FoodInputs";

const NewFood = () => {
  const [food, setFood] = useState({
    name: { validation: "text", value: "" },
    amount: { validation: "numeric", value: 0 },
    calories: { validation: "numeric", value: 0 },
    proteins: { validation: "numeric", value: 0 },
    carbs: { validation: "numeric", value: 0 },
    fats: { validation: "numeric", value: 0 },
  });

  const createNewFood = useCallback(async () => {
    const name = "food";
    const url = "/foods";
    let paramsObj = {};

    Object.keys(food).forEach((key) => {
      paramsObj[key] = food[key].value;
    });

    const { created, errors } = await create(paramsObj, url, name);

    console.log(created, errors);
  }, [food]);

  return (
    <FoodInputs
      onClick={createNewFood}
      title="Create New Food"
      buttonText="Create"
      food={food}
      setFood={setFood}
    />
  );
};

export default NewFood;
