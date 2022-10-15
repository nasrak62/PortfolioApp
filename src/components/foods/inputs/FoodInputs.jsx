import Input from 'components/utils/Input';
import ShowWhen from 'components/utils/ShowWhen';
import { isEmpty, capitalize } from 'utils/lodash';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getInputType } from 'utils/input';
import { Button } from 'material-ui';

const FoodInputs = ({
  onClick,
  title,
  buttonText,
  food,
  setFood,
  error,
  created,
  classes,
}) => {
  const inputs = useMemo(() => {
    const ATTRS = ['name', 'amount', 'calories', 'proteins', 'carbs', 'fats'];

    if (isEmpty(food)) {
      return null;
    }

    return (
      <div className={classes.fieldInputsContainer}>
        {ATTRS.map((attr) => {
          return (
            <div
              key={`${attr}-div-key`}
              className={classes.fieldInputContainer}>
              <p className={classes.label}>{capitalize(attr)}</p>
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
    <div className={classes.inputsContainer}>
      <div className={classes.titleContainer}>
        <h1>{title}</h1>
      </div>

      {inputs}

      <div className={classes.buttonsContainer}>
        <Link to="/foods" className={classes.link}>
          <Button variant="contained" className={classes.backButton}>
            Back
          </Button>
        </Link>

        <Button
          variant="contained"
          onClick={onClick}
          className={classes.button}>
          {buttonText}
        </Button>
      </div>

      <ShowWhen condition={Boolean(error)}>
        <div>
          <h4>{error}</h4>
        </div>
      </ShowWhen>

      <ShowWhen condition={Boolean(created)}>
        <div>
          <h4>Done</h4>
        </div>
      </ShowWhen>
    </div>
  );
};

export default FoodInputs;
