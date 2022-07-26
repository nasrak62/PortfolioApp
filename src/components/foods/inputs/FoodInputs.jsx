import Input from 'components/utils/Input';
import ShowWhen from 'components/utils/ShowWhen';
import { isEmpty, capitalize } from 'utils/lodash';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getInputType } from 'utils/input';

const FoodInputs = ({
  onClick,
  title,
  buttonText,
  food,
  setFood,
  error,
  created,
}) => {
  const inputs = useMemo(() => {
    const ATTRS = ['name', 'amount', 'calories', 'proteins', 'carbs', 'fats'];

    if (isEmpty(food)) {
      return null;
    }

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

      <ShowWhen condition={Boolean(error)}>
        <div>
          <p>{error}</p>
        </div>
      </ShowWhen>

      <ShowWhen condition={Boolean(created)}>
        <div>
          <p>Done</p>
        </div>
      </ShowWhen>
    </div>
  );
};

export default FoodInputs;
