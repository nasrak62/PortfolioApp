import noop from 'lodash/noop';
import { useCallback } from 'react';
import { handleInputChange } from 'utils/input';

const Input = ({
  classes,
  attr,
  pattern = null,
  type,
  value,
  onChange = null,
  keyProp,
  data = null,
  setData = noop,
}) => {
  const makeChange = useCallback(
    (e, attr, options = null) => {
      return handleInputChange(e, attr, data, setData);
    },
    [data, setData],
  );

  const handleChange = onChange || makeChange;

  if (pattern) {
    return (
      <input
        key={keyProp}
        className={classes}
        value={value}
        type={type}
        name={attr}
        onChange={(e) => handleChange(e, attr)}
        pattern={pattern}
      />
    );
  }

  return (
    <input
      key={keyProp}
      className={classes}
      value={value}
      type={type}
      name={attr}
      onChange={(e) => handleChange(e, attr)}
    />
  );
};

export default Input;
