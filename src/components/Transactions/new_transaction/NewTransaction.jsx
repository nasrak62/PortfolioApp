import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { ATTR } from "../Transactions";
import { createParams, checkParams } from "../utils/requestParams";
import AttributesInputs from "../utils/AttributesInputs";
import { createTransaction } from "./utils/createTransaction";
import ShowWhen from "components/utils/ShowWhen";
import { initialProperties, initialInputErrors } from "../utils/initial";
import { objectHasValue } from "utils/objects";
import { capitalize } from "utils/strings";
import { StyledNewTransactions, classes } from "./NewTransaction.styles";
import { cleanMessages, delayedClean } from "./utils/cleanMessages";

const NewTransaction = () => {
  const [properties, setProperties] = useState(initialProperties(null));
  const [errors, setErrors] = useState("");
  const [inputErrors, setInputErrors] = useState(initialInputErrors);
  const [showCreated, setShowCreated] = useState(false);

  const handleClick = useCallback(async () => {
    cleanMessages(
      errors,
      showCreated,
      setShowCreated,
      setErrors,
      setInputErrors
    );

    if (!checkParams(properties, setInputErrors)) {
      return null;
    }

    const params = createParams(properties);
    const { created, errors: serverErrors } = await createTransaction(params);

    if (!created || serverErrors) {
      setErrors(serverErrors);
      return null;
    }

    delayedClean(showCreated, setShowCreated, setErrors, setInputErrors);

    return null;
  }, [properties, showCreated, errors]);

  const showInputErrors = useMemo(() => {
    return ATTR.map((attr) => {
      if (inputErrors[attr]) {
        return <p key={`${attr}-error`}>{`${attr}:${inputErrors[attr]}`}</p>;
      }

      return null;
    });
  }, [inputErrors]);

  const variants = {
    hover: { scale: 2 },
    tap: {
      scale: [0, 0.5, 1, 2, 1],
      rotate: [0, 180, 360, 180, 0],
      borderRadius: ["25%", "50%", "100%", "50%", "25%"],
    },
  };

  return (
    <StyledNewTransactions className={classes.container}>
      <h1 className={classes.title}>Create New Transaction</h1>
      {ATTR.map((attr) => {
        return (
          <div
            key={`${attr}-input-container-key`}
            className={classes.inputContainer}
          >
            <div key={`${attr}-input-label-container-key`}>
              <p
                className={classes.inputLabel}
                key={`${attr}-p-label-container-key`}
              >
                {`${capitalize(attr)}:`}
              </p>
            </div>
            <AttributesInputs
              key={`${attr}-AttributesInputs-label-container-key`}
              properties={properties}
              setProperties={setProperties}
              attr={attr}
              classes={classes}
              value={properties[attr]?.value}
            />
          </div>
        );
      })}

      <div onClick={handleClick}>
        <motion.button
          variants={variants}
          whileHover="hover"
          whileTap="tap"
          className={classes.button}
        >
          Create
        </motion.button>
      </div>

      <ShowWhen condition={Boolean(showCreated)}>
        <p className={classes.title}>Created Successfully</p>
      </ShowWhen>

      <ShowWhen condition={Boolean(errors)}>
        <p className={classes.errors}>{errors}</p>
      </ShowWhen>

      <ShowWhen
        className={classes.errors}
        condition={objectHasValue(inputErrors)}
      >
        {showInputErrors}
      </ShowWhen>
    </StyledNewTransactions>
  );
};

export default NewTransaction;
