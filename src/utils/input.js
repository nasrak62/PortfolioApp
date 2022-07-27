export const getInputType = (attr) => {
  switch (attr) {
    case 'date':
      return 'date';
    default:
      return 'text';
  }
};

export const validateNumberInput = (string) => {
  return /^(([0-9]+(\.))|([0-9]+(\.)[0-9]+)|([0-9]+))$/.test(string);
};

export const validateTextInput = (string) => {
  return string?.length >= 3;
};

export const validateDateInput = (string) => {
  return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(string);
};

export const validateEmailInput = (string) => {
  return /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2, 4}$/.test(string);
};

export const validatePasswordInput = (string) => {
  return /(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(string);
};

const parseNumeric = (value) => {
  const int = /^[0-9]+$/.test(value);
  const float = /^[0-9]+(\.)[0-9]+$/.test(value);

  if (int) {
    return parseInt(value);
  }

  if (float) {
    return parseFloat(value);
  }

  return value;
};

export const validate = (type, newValue, oldValue) => {
  const emptyString = newValue === '';
  const valueExist = Boolean(newValue) || emptyString;
  let useNewValue = valueExist;

  if (type === 'numeric' && !emptyString) {
    useNewValue = Boolean(valueExist && validateNumberInput(newValue));
    return useNewValue ? parseNumeric(newValue) : oldValue;
  }

  return useNewValue ? newValue : oldValue;
};

const validateInput = (type, value) => {
  if (!value) {
    return false;
  }

  if (type === 'numeric') {
    return Boolean(validateNumberInput(value));
  }

  if (type === 'text') {
    return Boolean(validateTextInput(value));
  }

  if (type === 'date') {
    return Boolean(validateDateInput(value));
  }

  if (type === 'email') {
    return Boolean(validateEmailInput(value));
  }

  if (type === 'password') {
    return Boolean(validatePasswordInput(value));
  }

  return false;
};

export const validateFinalParams = (params, setErrors) => {
  return Object.keys(params).every((key) => {
    const valid = validateInput(params[key]?.validation, params[key]?.value);

    if (!valid) {
      setErrors((prevState) => {
        return { ...prevState, [key]: `${key} value is not valid` };
      });
    }

    return valid;
  });
};

export const handleInputChange = (e, attr, properties, setProperties) => {
  const newValue = e?.target?.value;
  const emptyString = newValue === '';
  const valueExist = Boolean(newValue) || emptyString;

  const value = validate(
    properties[attr]?.validation,
    newValue,
    properties[attr]?.value,
  );

  if (valueExist && value !== properties[attr]?.value) {
    setProperties((prevState) => {
      return { ...prevState, [attr]: { ...prevState[attr], value: value } };
    });
  }
};
