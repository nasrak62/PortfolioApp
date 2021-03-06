import ByCondition from "components/utils/ByCondition";
import Select from "components/utils/Select";
import Input from "components/utils/Input";
import { addNames, capitalize } from "utils/strings";
import { getInputType } from "utils/input";
import { useCallback } from "react";
import { handleInputChange } from "utils/input";
import { TRANSACTIONS_TYPE } from "../Transactions";

const AttributesInputs = ({
  properties,
  setProperties,
  classes,
  attr,
  value,
}) => {
  const handleChange = useCallback(
    (e, attr, options = null) => {
      return handleInputChange(e, attr, properties, setProperties);
    },
    [properties, setProperties]
  );

  return (
    <>
      {
        <ByCondition
          condition={attr === "type"}
          ifTrue={
            <Select
              classes={classes}
              value={value}
              attr={attr}
              handleChange={handleChange}
              options={TRANSACTIONS_TYPE}
            />
          }
          ifFalse={
            <Input
              classes={addNames(
                classes[`item${capitalize(attr)}`],
                classes.item
              )}
              keyProp={`${attr}-input-key`}
              key={`${attr}-Input-key`}
              attr={attr}
              type={getInputType(attr)}
              value={value}
              onChange={handleChange}
              pattern={
                attr === "price"
                  ? "^(([0-9]+(.))|([0-9]+(.)[0-9]+)|[0-9]+)$"
                  : null
              }
            />
          }
        />
      }
    </>
  );
};

export default AttributesInputs;
