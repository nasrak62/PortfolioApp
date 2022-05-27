import { capitalize } from "./strings";

export const objectHasEmpty = (object) => {
  return Object.keys(object).some((key) => !Boolean(object[key]));
};

export const objectHasValue = (object) => {
  return Object.keys(object).some((key) => Boolean(object[key]));
};

export const objectSetEmptyErrors = (object, setErrors) => {
  return Object.keys(object).forEach((key) => {
    if (!object[key]) {
      return setErrors(`${capitalize(key)} can not be empty`);
    }
  });
};
