import { destroyAndGetUpdatedData } from "utils/crud";

export const initialFood = (food = null) => ({
  name: { validation: "text", value: food?.name || "" },
  amount: { validation: "numeric", value: food?.amount || 0 },
  calories: { validation: "numeric", value: food?.calories || 0 },
  proteins: { validation: "numeric", value: food?.proteins || 0 },
  carbs: { validation: "numeric", value: food?.carbs || 0 },
  fats: { validation: "numeric", value: food?.fats || 0 },
});

export const recalculateValues = (values, newAmount, oldAmount) => {
  const retio = newAmount / oldAmount;

  const newValues = { ...values };

  newValues.calories = newValues.calories * retio;
  newValues.proteins = newValues.proteins * retio;
  newValues.carbs = newValues.carbs * retio;
  newValues.fats = newValues.fats * retio;

  return newValues;
};

export const handleFoodRowChange = (e, index, attr, data, setData) => {
  const oldValue = data[index][attr];
  let newData = [...data];
  let newValue = e?.target?.value || Math.max(1, e?.target?.value);
  newValue = parseFloat(newValue);
  newData[index][attr] = newValue;

  if (attr === "amount") {
    newData[index] = recalculateValues(data[index], newValue, oldValue);
  }

  setData((prev) => {
    return newData;
  });
};

export const onDeleteFood = (item, setData) => {
  destroyAndGetUpdatedData(
    `/foods/${item?._id}`,
    "food",
    "/foods",
    "foods",
    setData
  );
};

export const handleEditLink = (id) => {
  return `/foods/edit/${id}`;
};
