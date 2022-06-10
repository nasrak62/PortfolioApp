import Input from "components/utils/Input";
import capitalize from "lodash/capitalize";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { getInputType } from "utils/input";

const FoodInputs = ({ onClick, title, buttonText, food, setFood }) => {
  const inputs = useMemo(() => {
    const ATTRS = ["name", "amount", "calories", "proteins", "carbs", "fats"];
    return (
      <div>
        {ATTRS.map((attr) => {
          return (
            <div key={`${attr}-div-key`}>
              <p>{capitalize(attr)}</p>
              <Input
                classes={null}
                attr={attr}
                type={getInputType(attr)}
                value={food?.[attr]?.value}
                keyProp={`${attr}-input-key`}
                key={`${attr}-Input-key`}
                data={food}
                setData={setFood}
              />
            </div>
          );
        })}
      </div>
    );
  }, [food, setFood]);

  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>

      {inputs}

      <div>
        <button onClick={onClick}>{buttonText}</button>
      </div>

      <div>
        <Link to="/foods">Back</Link>
      </div>
    </div>
  );
};

export default FoodInputs;
