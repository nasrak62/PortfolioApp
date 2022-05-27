import { ATTR } from "../Transactions";
import { validateFinalParams } from "utils/input";

export const createParams = (properties) => {
  let params = {};
  ATTR.forEach((attr) => {
    params = { ...params, [attr]: properties[attr]?.value };
  });

  return params;
};

export const checkParams = (params, setInputErrors) => {
  if (validateFinalParams(params, setInputErrors)) {
    return true;
  }

  return false;
};

export const handleParams = (properties, setInputErrors) => {
  if (!checkParams(properties, setInputErrors)) {
    return null;
  }

  const params = createParams(properties);

  return params;
};
