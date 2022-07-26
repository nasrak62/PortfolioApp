import React from "react";

import useFetchData from "hooks/fetchData";

// import Table from "./Table";

import Table from "components/utils/Table/Table";
import Options from "./Options";
import { handleEditLink, handleFoodRowChange, onDeleteFood } from "./utils";

const attrs = ["name", "amount", "proteins", "carbs", "fats"];

const Foods = () => {
  const [foods, setFoods, error, setError] = useFetchData("/foods", "foods");

  return (
    <div>
      <div>
        <h1>Foods</h1>
      </div>

      <Options />
      <Table
        data={foods}
        setData={setFoods}
        attrs={attrs}
        onDelete={onDeleteFood}
        onChange={handleFoodRowChange}
        editLink={handleEditLink}
      />
    </div>
  );
};

export default Foods;
