const Input = ({
  classes,
  attr,
  pattern = null,
  type,
  value,
  handleChange,
  keyProp,
}) => {
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
