const Select = ({ value, attr, handleChange, classes, options }) => {
  return (
    <select
      name={attr}
      className={classes.select}
      id={attr}
      value={value}
      key={`${attr}-input-select-container-key`}
      onChange={(e) => handleChange(e, attr, options)}>
      {options.map((key) => {
        return (
          <option
            className={classes.selectOption}
            key={`${attr}-input-option-container-${key}-key`}
            value={key}>
            {key}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
