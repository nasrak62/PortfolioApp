import React, { useState, useCallback } from "react";

import Input from "components/utils/Input";
import { getInputType } from "utils/input";

import { classes, StyledChangeWeight } from "./ChangeWeight.styles";
import ShowWhen from "components/utils/ShowWhen";
import { Link } from "react-router-dom";

const ChangeWeight = ({
  weightChangeClick,
  title,
  buttonText,
  weight,
  setWeight,
}) => {
  const [created, setCreated] = useState(false);
  const [errors, setErrors] = useState("");

  const handleClick = useCallback(async () => {
    setCreated(false);
    setErrors("");

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
          <div key={`new-weight-${attr}-div`}>
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

      <div>
        <button onClick={handleClick}>{buttonText}</button>
      </div>

      <ShowWhen condition={Boolean(created)}>
        <p className={classes.done}>Done!</p>
      </ShowWhen>

      <Link className={classes.link} to="/weights">
        Back
      </Link>
    </StyledChangeWeight>
  );
};

export default ChangeWeight;
