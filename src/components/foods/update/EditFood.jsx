import useFetchData from "hooks/fetchData";
import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { update } from "utils/crud";
import FoodInputs from "../inputs/FoodInputs";

const EditFood = () => {
  const { id } = useParams();

  const changeFoodObject = useCallback((item) => {
    return {
      name: { validation: "text", value: item?.name },
      amount: { validation: "numeric", value: item?.amount },
      calories: {
        validation: "numeric",
        value: item?.calories,
      },
      proteins: {
        validation: "numeric",
        value: item?.proteins,
      },
      carbs: { validation: "numeric", value: item?.carbs },
      fats: { validation: "numeric", value: item?.fats },
    };
  }, []);

  const [food, setFood, error, setError] = useFetchData(
    `/foods/${id}`,
    "food",
    changeFoodObject
  );

  const [created, setCreated] = useState(false);

  const updateFood = useCallback(async () => {
    const name = "food";
    const url = `/foods/${id}`;
    let paramsObj = {};

    Object.keys(food).forEach((key) => {
      paramsObj[key] = food[key].value;
    });

    console.log(paramsObj);

    const { errors } = await update(paramsObj, url, name);

    if (errors) {
      return setError(errors);
    }

    return setCreated(true);
  }, [food, id, setError]);

  console.log(error);
  return (
    <FoodInputs
      onClick={updateFood}
      title="Edit Food"
      buttonText="Update"
      food={food}
      setFood={setFood}
      error={error?.fullMessages}
      created={created}
    />
  );
};

export default EditFood;
