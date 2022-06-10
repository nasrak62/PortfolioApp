import useFetchData from "hooks/fetchData";
import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { create } from "utils/crud";
import FoodInputs from "../inputs/FoodInputs";

const EditFood = () => {
  const { id } = useParams();

  const [food, setFood, error, setError] = useFetchData(`/foods/${id}`, "food");

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
      title="Edit Food"
      buttonText="Update"
      food={food}
      setFood={setFood}
    />
  );
};

export default EditFood;
