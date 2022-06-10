import React from "react";

import useFetchData from "hooks/fetchData";

import Table from "./Table";
import Options from "./Options";

const Foods = () => {
  const [foods, setFoods, error, setError] = useFetchData("/foods", "foods");

  return (
    <div>
      <div>
        <h1>Foods</h1>
      </div>

      <Options />
      <Table data={foods} />
    </div>
  );
};

export default Foods;
