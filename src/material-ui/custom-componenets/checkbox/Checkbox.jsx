import { Checkbox } from 'material-ui';
import { FormControlLabel } from 'material-ui';
// import { useCallback } from 'react';

const CustomCheckbox = (setChecked, checked, label) => {
  // const handleCheck = useCallback(() => {
  //   setChecked((prev) => !prev);
  // });

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={Boolean(checked)}
          onChange={() => setChecked((prev) => !prev)}
          inputProps={{ 'aria-label': 'control' }}
        />
      }
      label={label}
    />
  );
};

export default CustomCheckbox;
