import React, { useState, useCallback } from 'react';

import Input from 'components/utils/Input';
import { getInputType } from 'utils/input';

import { classes, StyledChangeWeight } from './ChangeWeight.styles';
import ShowWhen from 'components/utils/ShowWhen';
import { Link } from 'react-router-dom';
import { Button } from 'material-ui';

const ChangeWeight = ({
  weightChangeClick,
  title,
  buttonText,
  weight,
  setWeight,
}) => {
  const [created, setCreated] = useState(false);
  const [errors, setErrors] = useState('');

  const handleClick = useCallback(async () => {
    setCreated(false);
    setErrors('');

    const result = await weightChangeClick(weight);

    if (result?.errors) {
      return setErrors(result?.errors);
    }

    return setCreated(true);
  }, [weight, weightChangeClick]);

  return (
    <StyledChangeWeight className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>{title}</h1>
      </div>

      <ShowWhen condition={Boolean(errors)}>
        <p className={classes.errors}>{errors}</p>
      </ShowWhen>

      {Object.keys(weight).map((attr) => {
        return (
          <div
            key={`new-weight-${attr}-div`}
            className={classes.inputContainer}>
            <p className={classes.label}>{attr}</p>
            <Input
              classes={classes}
              attr={attr}
              pattern={null}
              type={getInputType(attr)}
              value={weight[attr].value}
              keyProp={`new-weight-${attr}-input`}
              data={weight}
              setData={setWeight}
            />
          </div>
        );
      })}

      <div className={classes.options}>
        <div>
          <Button variant="contained" onClick={handleClick}>
            {buttonText}
          </Button>
        </div>
        <div>
          <Link className={classes.link} to="/weights">
            <Button variant="contained" color="secondary">
              Back
            </Button>
          </Link>
        </div>
      </div>

      <ShowWhen condition={Boolean(created)}>
        <p className={classes.done}>Done!</p>
      </ShowWhen>
    </StyledChangeWeight>
  );
};

export default ChangeWeight;
